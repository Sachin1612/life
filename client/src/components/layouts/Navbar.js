import React from 'react'
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <div className="mx-auto p-5 shadow-md bg-white">
      <nav className="flex justify-between">
        <div className='rounded-full h-10 w-10 flex items-center justify-center bg-blue-600 text-xl font-extrabold text-white'>
          <Link to="/">lf</Link>
        </div>
        <ul className="flex flex-row my-auto">
          <li className="pr-5"><Link to='/posts'>Posts </Link></li>
          <li className="pr-5"><Link to='/chats'>Chats </Link></li>
          <li className="pr-5"><Link to='/tranding'>Trendings </Link></li>
          <li className="pr-5"><Link to='/signup'>Sign up</Link></li>
          <li className="pr-5"><Link to='/login'>Login</Link></li>
        </ul>
      </nav>
    </div>
  )
}
