import {
  GET_AUTHOR,
  GET_AUTHOR_SUCCESS,
  GET_AUTHOR_ERROR,
} from './actions';

export const getAuthorSuccess = ({
  author,
}) => ({
  type: GET_AUTHOR_SUCCESS,
  payload: {
    author,
  }
})

export const getAuthorError = ({
  error,
}) => ({
  type: GET_AUTHOR_ERROR,
  payload: {
    error
  }
})

export const getAuthor = () => dispatch => {
  dispatch({
    type: GET_AUTHOR,
  });

  //const authorId = state.sermon.author;

  fetch ('https://www.kt.org/wp-json/wp/v2/users/${authorId}')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(
        getAuthorSuccess({
          author: responseJson,
        })
      );
    })
    .catch((error) => {
      console.error(error)
      dispatch(
        getAuthorError({
          error,
        })
      )
    });
}
