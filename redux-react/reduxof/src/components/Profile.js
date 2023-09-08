import React from 'react'
import { useSelector } from 'react-redux';
import { userSlice } from '../features/user';

function Profile() {
  const user=useSelector((state) => state.user.value);
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name:{user.name}</p>
      <p>Age:{user.age}</p>
      <p>Email:{user.email}</p>
    </div>
  );
}

export const {login} = userSlice.actions
export default Profile;
