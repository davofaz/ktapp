import {
  GET_AUTHOR,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_ERROR,
} from '../actions/actions';

const initialState = {
  data: [],
  loaded: false,
};

export default function author(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_AUTHOR_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: payload.author,
      }
    default:
      return state
  }
}
