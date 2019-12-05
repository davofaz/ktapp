import {
  GET_MAGS,
  GET_MAGS_SUCCESS,
  GET_MAGS_ERROR,
} from '../actions/actions';

const initialState = {
  data: [],
  loaded: false,
};

export default function rT(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_MAGS_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: payload.mags,
      }
    default:
      return state
  }
}
