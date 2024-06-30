import React from 'react'


export default function form(props) {
  return (
    <>
  <div className="flex justify-center items-center h-screen">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full border-8 border-gray-900">
    {props.type === 'signin' ? (
      <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
    ) : (
      <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
    )}

    {props.type === 'signin' ? (
      <div className="mb-4">
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="fullName" name="fullName" className="border-2 text-center border-gray-900 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      </div>
    ) : null}

    <div className="mb-4">
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
      <input type="email" id="email" name="email" autoComplete="email" className="text-center border-2 border-gray-900 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      <p className="text-gray-500 text-xs mt-1">We'll never share your email with anyone else.</p>
    </div>

    <div className="mb-4">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
      <input type="password" id="password" name="password" autoComplete="current-password" className="text-center border-2 border-gray-900 mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
    </div>

    {props.type === 'signin' ? (
    
    <div className="mb-3 flex items-center">
      <input type="checkbox" id="rememberMe" name="rememberMe" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"/>
      <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
    </div>
    ) : null}

    <button type="submit" className="border-2 border-gray-900 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
      {props.type === 'signin' ? 'Sign in' : 'Login'}
    </button>
  </form>
</div>


  </>
  )
}
