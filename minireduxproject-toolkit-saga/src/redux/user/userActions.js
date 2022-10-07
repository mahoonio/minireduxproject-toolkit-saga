import axios from 'axios';
import {
  FETCH_USERS_ERROR,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_REQUEST,
} from './userTypes';
function fetchUsersRequest() {
  return { type: FETCH_USERS_REQUEST };
}

function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCESS, payload: users };
}

function fetchUsersFailure(error) {
  return { type: FETCH_USERS_ERROR, payload: error };
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        const userIds = res.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(userIds));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};

export default fetchUsers;
