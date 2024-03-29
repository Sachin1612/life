import React from 'react'
import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="mx-auto p-5 shadow-md bg-white sticky top-0">
      <nav className="flex justify-between">
        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-blue-600 text-xl font-extrabold text-white'>
          <Link to="/">lf</Link>
        </div>
        <ul className="flex flex-row my-auto">
          <li className="pr-5"><NavLink  to='/posts'>Posts </NavLink></li>
          <li className="pr-5"><NavLink to='/chats'>Chats </NavLink></li>
          <li className="pr-5"><NavLink to='/bussiness'>Bussiness </NavLink></li>
          <li className="pr-5"><NavLink to='/signup'>Sign up</NavLink></li>
          <li className="pr-5"><NavLink to='/login'>Login</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
