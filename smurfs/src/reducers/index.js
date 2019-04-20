/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCHING_SMURFS, FETCH_SUCCESS, FETCH_FAILURE, POSTING_SMURF, POST_SUCCESS, POST_FAILURE } from '../actions';

const initialState = {
  smurfs: [],
  newId: 1,
  fetchingSmurfs: false,
  postingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_SMURFS:
      return {
        ...state,
        fetchingSmurfs: true,
        error: null
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
      }
    case FETCH_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      }
    case POSTING_SMURF:
      return {
        ...state,
        postingSmurf: true,
        error: null
      }
    case POST_SUCCESS:
      return {
        ...state,
        newId: state.newId++,
        postingSmurf: false,
        error: null
      }
    case POST_FAILURE:
      return {
        ...state,
        postingSmurf: false,
        error: action.payload
      }
    default:
      return state;
  }
}