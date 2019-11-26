import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from '../actions/actions';

const initialState = {
  data: [],
  loaded: false,
};

export default function whatsOn(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_EVENTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: payload.events,
      }
    default:
      return state
  }
}
