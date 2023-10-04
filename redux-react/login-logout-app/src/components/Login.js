import React from 'react'

const Login = () => {
  return (
    <div className='login'>
      <form className='login__form'>
        <h1>Login here 💾</h1>
        <input type="name" placeholder='Name'/>
        <input type="email" placeholder='Email'/>
        <input type="password" placeholder='Password'/>
      </form>
    </div>
  )
}

export default Login
