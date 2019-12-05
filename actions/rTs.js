import {
  GET_MAGS,
  GET_MAGS_SUCCESS,
  GET_MAGS_ERROR,
} from './actions';

export const getMagsSuccess = ({
  mags,
}) => ({
  type: GET_MAGS_SUCCESS,
  payload: {
    mags,
  }
})

export const getMagsError = ({
  error,
}) => ({
  type: GET_MAGS_ERROR,
  payload: {
    error
  }
})

export const getMags = () => dispatch => {
  dispatch({
    type: GET_MAGS,
  });

  fetch ('https://www.kt.org/wp-json/wp/v2/posts?categories=218')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(
        getMagsSuccess({
          mags: responseJson,
        })
      );
    })
    .catch((error) => {
      console.error(error)
      dispatch(
        getMagsError({
          error,
        })
      )
    });
}
