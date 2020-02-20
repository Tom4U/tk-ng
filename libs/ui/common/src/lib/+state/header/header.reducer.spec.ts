import * as HeaderActions from './header.actions';
import { initialState, reducer, State } from './header.reducer';

describe('Header Reducer', () => {
  const createAppTitle = (appTitle: string) => appTitle;

  beforeEach(() => {});

  describe('valid Header actions', () => {
    it('setAppTitle should return app title', () => {
      const appTitle = createAppTitle('title');
      const action = HeaderActions.setAppTitle({ appTitle });

      const result: State = reducer(initialState, action);

      expect(result.appTitle.length).toBe(appTitle.length);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
