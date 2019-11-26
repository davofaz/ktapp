import {
  GET_EVENTS,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
} from './actions';

export const getEventsSuccess = ({
  events,
}) => ({
  type: GET_EVENTS_SUCCESS,
  payload: {
    events,
  }
})

export const getEventsError = ({
  error,
}) => ({
  type: GET_EVENTS_ERROR,
  payload: {
    error
  }
})

export const getEvents = () => dispatch => {
  dispatch({
    type: GET_EVENTS,
  });

  fetch ('https://www.kt.org/wp-json/tribe/events/v1/events')
    .then(response => response.json())
    .then(responseJson => {
      dispatch(
        getEventsSuccess({
          events: responseJson.events,
        })
      );
    })
    .catch((error) => {
      console.error(error)
      dispatch(
        getEventsError({
          error,
        })
      )
    });
}
