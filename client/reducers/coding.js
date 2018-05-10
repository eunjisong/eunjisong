import axios from 'axios'

// action type
const ALL_CODINGS = 'ALL_CODINGS';
const SINGLE_CODING = 'SINGLE_CODING';
const ADD_CODING = 'ADD_CODING';
const REMOVE_CODING = 'REMOVE_CODING';

// action creators
const allCoding = sites => ({type: ALL_CODINGS, sites })
const singleCoding = site => ({type: SINGLE_CODING, site})
const addCoding = site => ({type: ADD_CODING, site})
const removeCoding = id => ({type: REMOVE_CODING, id})

// thunk
export const thunkAllCoding = () => {
  return dispatch => {
    return axios.get('/api/coding')
      .then( res => res.data)
      .then( codings => dispatch(allCoding(codings)))
      .catch( err => console.error('thunkAllCoding error', err))
  }
}

export const thunkOneCoding = (id) => {
  return dispatch => {
    return axios.get(`/api/coding/${id}`)
      .then( res => res.data )
      .then( site => dispatch(singleCoding(site)))
      .catch( err => console.error('thunkOneCoding error', err))
  }
}

export const thunkAddCoding = (site) => {
  return dispatch => {
    return axios.post('/api/coding', site)
      .then( res => res.data )
      .then( newSite => dispatch(addCoding(newSite)))
      .catch( err => console.error('thunkAddCoding error', err))

  }
}

export const thunkRemoveCoding = (id) => {
  return dispatch => {
    return axios.delete(`/api/coding/${id}`)
      .then( () => dispatch(removeCoding(id)))
      .catch( err => console.error('thunkRemoveCoding error', err))
  }
}


export default (state=[], action) => {
  switch(action.type) {
    case ALL_CODINGS:
      return action.sites;
    case SINGLE_CODING:
      return action.site;
    case ADD_CODING:
      return [...state, action.site];
    case REMOVE_CODING:
      return state.filter( site => site.id !== action.id)
    default:
      return state;
  }
}

