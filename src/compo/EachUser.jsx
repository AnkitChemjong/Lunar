import React from 'react';
import { useLocation,useParams,Link } from 'react-router-dom';

const EachUser = () => {
    const location=useLocation();
    const {id}=useParams();
    const data=location.state||{};
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex-wrap p-5">
      <a href="#">
        <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="Blog Post" />
      </a>
      <div className="p-5">
        <h1 className="text-xl font-bold mb-3">User ID: {id}</h1>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Username: {data.userName}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Password: {data.password}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Salt: {data.salt}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Created At: {data.createdAt}</p>
      </div>
    </div>
  </div>
  )
}

export default EachUser
