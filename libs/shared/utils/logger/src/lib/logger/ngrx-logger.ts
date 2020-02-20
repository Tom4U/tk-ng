import { ActionReducer } from '@ngrx/store';
import * as Case from 'case';

import { ConsoleLogger } from './console.logger';
import { LogLevel } from './log-level.enum';

const logger = new ConsoleLogger(LogLevel.DEBUG);

export function ngrxLogger(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    const isNgrx = action.type.startsWith('@ngrx');
    const hasPayload = action.hasOwnProperty('payload');
    let groupTitle = '';

    if (!isNgrx) {
      groupTitle += action.type;
    } else {
      const parts = action.type.split('/').slice(1);

      parts.forEach((part, index) => {
        const isFirstPart = index === 0;
        const title = isFirstPart
          ? `[${Case.pascal(part)}]`.replace('RouterStore', 'Router')
          : ` ${Case.capital(part)}`;

        groupTitle += title;
      });

      if (hasPayload) {
        const actionAny = <any>action;

        if (actionAny.payload.hasOwnProperty('event')) {
          groupTitle += Case.capital(
            ` ${Case.sentence(actionAny.payload.event.constructor.name)}`
          );
        }
      }
    }

    logger.startGroup(groupTitle);
    logger.log('State', state);

    if (hasPayload) {
      logger.log('Payload', (<any>action).payload);
    }

    logger.endGroup();

    return reducer;
  };
}
