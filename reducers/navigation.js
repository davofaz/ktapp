import {
  ON_NAVIGATION_CHANGE,
} from '../actions/actions';

const initialState = {
  current: 'Home'
};

export default function navigation(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ON_NAVIGATION_CHANGE:
      return {
        ...state,
        current: payload.screen, 
      }
    default:
      return state
  }
}