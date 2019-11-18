import {
  GET_SERMONS,
  GET_SERMONS_SUCCESS,
  GET_SERMONS_ERROR,
} from '../actions/actions';

const initialState = {
  data: [],
  loaded: false,
};

export default function sermonArchive(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SERMONS_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: payload.sermons, 
      }
    default:
      return state
  }
}