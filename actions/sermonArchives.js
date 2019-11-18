import { 
  GET_SERMONS,
  GET_SERMONS_SUCCESS,
  GET_SERMONS_ERROR,
} from './actions';

export const getSermonsSuccess = ({
  sermons,  
}) => ({
  type: GET_SERMONS_SUCCESS,
  payload: {
    sermons,
  }
})

export const getSermonsError = ({
  error,  
}) => ({
  type: GET_SERMONS_ERROR,
  payload: {
    error
  }
})

export const getSermons = () => dispatch => {
  dispatch({
    type: GET_SERMONS,
  });

  fetch ('https://www.kt.org/wp-json/wp/v2/posts?categories=8')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(
        getSermonsSuccess({
          sermons: responseJson,
        })
      );
    })
    .catch((error) => {
      console.error(error)
      dispatch(
        getSermonsError({
          error,
        })
      )
    });
}