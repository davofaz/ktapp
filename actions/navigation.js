import {
  ON_NAVIGATION_CHANGE,
} from './actions';

export const onNavigationChange = (screen) => {
  return {
    type: ON_NAVIGATION_CHANGE,
    payload: {
      screen,
    }
  };
};