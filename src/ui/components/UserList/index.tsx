import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, getUsers } from '../../../store/users';
import { deleteUser } from '../../../store/users/user/actions/deleteUser';

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers(dispatch))
  },[dispatch])
  
  return (
    <div className="row">
      {users.map(({ name, surname, id}) => (
        <div className="column" key={id+name}>
          <div className="ui card">
            <div className="content">
              <h3>{name}</h3>
              <h3>{surname}</h3>
            </div>
            <button className="ui button negative" onClick={() => dispatch(deleteUser(dispatch, id))}><i className="close icon"></i></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;