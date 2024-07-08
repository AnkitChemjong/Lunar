import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context.jsx';

export default function Navbar() {
  const navigate = useNavigate();
  const { user,setUser} = useContext(AppContext);  // Ensure setUser is available from AppContext
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const delCookie = async (e) => {
    try {
      await axios.delete('http://localhost:8080/user/clear',{withCredentials:true});
      //console.log(user);
      window.location.reload();
      navigate('/');
    } catch (error) {
      console.error('Failed to delete cookie:', error);
    }
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/">
                  <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Home</button>
                </Link>
              </div>
            </div>
          </div>
          {user === null ? (
            <div className="flex space-x-4 float-end m-5">
              <Link to="/form">
                <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Signin</button>
              </Link>
              <Link to="/next">
                <button className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">Login</button>
              </Link>
            </div>
          ) : (
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                  id="menu-button"
                  aria-haspopup="true"
                >
                  Logout
                  <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <form role="none" onSubmit={delCookie}>
                      <button type="submit" className="block w-full px-4 py-2 text-left text-sm text-gray-700" role="menuitem" tabIndex={-1} id="menu-item-3">
                        Sign out
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
