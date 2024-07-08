import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function Table() {
    const [user,setUser]=useState([]);
    const [flag,setFlag]=useState(0);

    useEffect(()=>{
       try{
        axios.get('http://localhost:8080/user/getUser').then((response)=>{
            // console.log(response.data.user)
         setUser(response.data.user)

        }).catch((error)=>{console.log(error);});
       }
       catch(e){
        console.log(e);
       }
    },[flag])
    const deleteUser=async (email)=>{
           axios.delete('http://localhost:8080/user/email',{email}).then(()=>{
            setFlag(flag+1);
            window.alert('User deleted');
           }).catch((err) =>{window.alert(err);})
    }
    
  return (
    <>
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   UserId
                </th>
                <th scope="col" class="px-6 py-3">
                   User Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Password
                </th>
                <th scope="col" class="px-6 py-3">
                   Salt
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {user.map((users)=>{
                return (
                    <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700" key={users.id}>
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {users.id}
                    </th>
                    <td class="px-6 py-4">
                    {users.userName}
                    </td>
                    <td class="px-6 py-4">
                    {users.email}
                    </td>
                    <td class="px-6 py-4">
                    {users.password}
                    </td>
                    <td class="px-6 py-4">
                    {users.salt}
                    </td>
                    <td class="px-6 py-4">
                    <button type="button" onClick={()=>{deleteUser(users.email)}} class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Delete</button>
                    <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Update</button>
                    </td>
                </tr>
                )
            })}
          
        </tbody>
    </table>
</div>


    </>
  );
}
