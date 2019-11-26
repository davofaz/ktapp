import {
  GET_CONTACTS,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_ERROR,
} from './actions';

export const getContactsSuccess = ({
  contacts,
}) => ({
  type: GET_CONTACTS_SUCCESS,
  payload: {
    contacts,
  }
})

export const getContactsError = ({
  error,
}) => ({
  type: GET_CONTACTS_ERROR,
  payload: {
    error
  }
})

export const getContacts = () => dispatch => {
  dispatch({
    type: GET_CONTACTS,
  });

  fetch ('https://www.kt.org/wp-json/wp/v2/pages/23957')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(
        getContactsSuccess({
          contacts: responseJson.post_meta_fields,
        })
      );
    })
    .catch((error) => {
      console.error(error)
      dispatch(
        getContactsError({
          error,
        })
      )
    });
}
