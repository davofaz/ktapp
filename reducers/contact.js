import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
} from '../actions/actions';

const initialState = {
  data: [],
  loaded: false,
};

export default function whatsOn(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_CONTACTS_SUCCESS:
      return {
        ...state,
        loaded: true,
        data: payload.contacts,
      }
    default:
      return state
  }
}
