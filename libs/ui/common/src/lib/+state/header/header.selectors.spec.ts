import * as HeaderSelectors from './header.selectors';

describe('Header Selectors', () => {
  const createAppTitle = (appTitle: string) => appTitle;

  let state;

  beforeEach(() => {
    state = {
      header: {
        appTitle: createAppTitle('title')
      }
    };
  });

  describe('Header Selectors', () => {
    it('getAppTitle() should return the app title', () => {
      const appTitle = HeaderSelectors.getAppTitle(state);

      expect(appTitle.length).toBe('title'.length);
    });
  });
});
