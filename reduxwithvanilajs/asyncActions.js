const redux = require('redux');
const createStore = redux.createStore;

// request => loading..
// success => data
// failure => error

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

// action creators:

function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}

function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

function fetchUsersFailure(error) {
  return { type: FETCH_USERS_ERROR, payload: error };
}
const initialState = {
  loading: false,
  data: [],
  error: '',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { loading: true };
    case FETCH_USERS_SUCCESS:
      return { loading: false, data: action.payload, error: '' };
    case FETCH_USERS_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);
