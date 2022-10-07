import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchUsers from '../redux/user/userActions';

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { users, error, loading } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        userData &&
        users &&
        users.length && (
          <div>
            <h2>users list : </h2>
            {users.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
