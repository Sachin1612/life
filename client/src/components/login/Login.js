import React, { useState } from 'react'
import api from '../../services/api'
import GoogleLogin from "react-google-login";

export const Login = () => {
  const [userName, setUserName] = useState('user1')
  const [password, setPassword] = useState('')

  const login = async () => {
    const res = await api.login(
      userName,
      password
    )

    debugger
    localStorage.setItem('user', JSON.stringify(res))
  }

  const responseGoogle = (res) => {
    console.log(res);
    console.log(res.profileObj);
  }

  return (
    <>
    <div className='card p-4'>
      <div className='flex mb-4'>
        <input className='w-full rounded-3xl border-none bg-gray-100 px-2 py-2 my-auto outline-none'
          placeholder='Email or username'
          type='text'
          value={userName}
          onChange={e => setUserName(e.target.value)}
        />
      </div>
      <div className='flex mb-4'>
        <input className='w-full rounded-3xl border-none bg-gray-100 px-2 py-2 my-auto outline-none'
          placeholder='Password'
          type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      
      <div className='flex border-t'>
        <button
          className='btn btn-primary'
          onClick={login}
        >
          Login
        </button>

        <GoogleLogin
          clientId='828647835149-m5eaa3nfvnnsf99rbg67kjdrr3d2cmn8.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
        
      </div>
    </div>
    </>
  )
}
