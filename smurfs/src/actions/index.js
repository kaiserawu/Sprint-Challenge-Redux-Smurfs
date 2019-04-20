import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS });

  axios.get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_FAILURE,
        payload: err
      })
    })
}

export const POSTING_SMURF = 'POSTING_SMURF';
export const POST_SUCCESS = 'POST_SUCCESS';
export const POST_FAILURE = 'POST_FAILURE';

export const postSmurf = smurfData => dispatch => {
  dispatch({ type: POSTING_SMURF });

  axios.post('http://localhost:3333/smurfs', smurfData)
    .then(res => {
      dispatch({
        type: POST_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: POST_FAILURE,
        payload: err
      })
    })
}