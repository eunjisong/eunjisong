import axios from 'axios';

// action type
const ALL_ARTS = 'ALL_ARTS';
const SINGLE_ART = 'SINGLE_ART';
const ADD_ART = 'ADD_ART';
const REMOVE_ART = 'REMOVE_ART';

// action creator
const allArts = (arts) => ({ type: ALL_ARTS, arts});
const singleArt = (art) => ({ type: SINGLE_ART, art});
const addArt = (art) => ({ type: ADD_ART, art});
const removeArt = (id) => ({ type: REMOVE_ART, id});

// thunk
export const thunkAllArts = (arts) => {
  return dispatch => {
    return axios.get('/api/artwork')
      .then( res => res.data )
      .then( arts => dispatch(allArts(arts)))
      .catch( err => console.error('err from thunkAllArts', err))
  }
}

export const thunkSingleArt = (id) => {
  return dispatch => {
    return axios.get(`/api/artwork/${id}`)
      .then( res => res.data )
      .then( art => dispatch(singleArt(art)))
      .catch( err => console.error('err from thunkSingleArt', err))
  }
}

export const thunkAddArt = (art) => {
  return dispatch => {
    return axios.post('/api/artwork', art)
      .then( res => res.data )
      .then( newArt => dispatch(addArt(newArt)))
      .catch( err => console.error('err from thunkAddArt', err))
  }
}

export const thunkRemoveArt = (id) => {
  return dispatch => {
    return axios.delete(`/api/artwork/${id}`)
      .then( () => dispatch(removeArt(id)))
      .catch( err => console.error('err from thunkRemoveArt', err))
  }
}

// reducer
export default (state=[], action) => {
  switch(action.type){
    case ALL_ARTS:
      return action.arts
    case SINGLE_ART:
      return action.art
    case ADD_ART:
      return [ ...state, action.art]
    case REMOVE_ART:
      return state.filter( art => art.id !== action.id )
    default:
      return state;
  }
}
