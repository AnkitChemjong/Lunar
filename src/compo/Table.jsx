import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Form from './form.jsx';
export default function Table() {
    const navigate=useNavigate();
    const [user,setUser]=useState([]);
    const [flag,setFlag]=useState(0);
    const [toggle,setToggle]=useState(false);
    const [temp,setTemp]=useState(null);

    const eachUser=(e,data)=>{
        e.preventDefault();
        navigate(`/each/${data.id}`,{state:data});
    }

    useEffect(()=>{
        axios.get('http://localhost:8080/user/getUser').then((response)=>{
            // console.log(response.data.user)
         setUser(response.data.user)

        }).catch((error)=>{console.log(error);});
    },[flag])

    const deleteUser=async (emails)=>{
        const datas={email:emails}
        console.log(datas);
           axios.delete('http://localhost:8080/user/email',{data:datas}).then(()=>{
            setFlag(flag+1);
            window.alert('User deleted');
           }).catch((err) =>{window.alert(err);})
    }
    const updateUser=(e,data)=>{
       // console.log(temp);
        axios.put(`http://localhost:8080/user/updateUser/${temp}`,data).then(()=>{
            setFlag(flag+1);
            window.alert('User Updated');
            setToggle(!toggle)
           }).catch((err) =>{window.alert(err);})
    }
    const toggleFunc = (e,data) => {
        e.preventDefault();
        setToggle(!toggle);
        // console.log(data);
        setTemp(data);
    };
  return (
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border-collapse border border-gray-200 dark:border-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3 border border-gray-200 dark:border-gray-700">
                   UserId
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-200 dark:border-gray-700">
                   User Name
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-200 dark:border-gray-700">
                    Email
                </th>
                <th scope="col" className="px-6 py-3 border border-gray-200 dark:border-gray-700">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {user.map((users)=>{
                return (
                    <>
                    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={users.id}>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {users.id}
                    </th>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">
                    {users.userName}
                    </td>
                    <td className="px-6 py-4 border border-gray-200 dark:border-gray-700">
                    {users.email}
                    </td>
                    <td class="px-6 py-4 border border-gray-200 dark:border-gray-700">
                    <button type="button" onClick={()=>{deleteUser(users.email)}} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={(e)=>{toggleFunc(e,users.id)}}>Update</button>
                    <button onClick={(e)=>eachUser(e,users)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">View</button>
                    </td>
                   </tr>
                   </>
                )
            })}
          
        </tbody>
    </table>
    {toggle && (
       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg" style={{backgroundColor: 'rgba(255,255,255,.2)', position: 'absolute',
            borderRadius: '10px', boxShadow: '0 25px 45px rgba(255,255,255,.2)',
            border: '2px solid rgba(255,255,255,.5)', backdropFilter: 'blur(5px)', display: 'block',
            alignItems: 'center', justifyContent: 'center',zIndex:'1'}}>
            <Form func={updateUser} tog={toggleFunc} type="Update" />
          </div>
        </div>
    )}
</div>
  );
}
