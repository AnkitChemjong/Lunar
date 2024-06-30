import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"/>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
            <Link to='/' ><button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</button></Link>
            </div>
          </div>
        </div>
      <div className="flex space-x-4 float-end m-5">      
        <Link to='/form' ><button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Signin</button></Link>
        <Link to='/next'><button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Login</button></Link>
      </div>
      </div>
    </div>
  </nav>
  
  
  )
}
