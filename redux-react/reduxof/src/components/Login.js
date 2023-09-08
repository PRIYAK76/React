import React from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../components/Profile'

function Login() {
    const dispatch=useDispatch();
  return (
    <div>
      <button 
      onClick={()=>dispatch(login({name:'priya',age:20,email:'priya@em'}))}>Login</button>
    </div>
  )
}

export default Login
