// AppContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider =({ children }) => {
  const [user, setUser] = useState(null);
  const [flag,setFlag]=useState(0);
  useEffect(()=>{
      const fetchData = async () => {
        try {
           await axios.get('http://localhost:8080/user/get',{withCredentials:true}).then((response)=>{

            console.log(response.data);
            setUser(response.data.user); 
        }).catch((error)=>{});

        } catch (error) {
          console.error('Error fetching user data:', error);
          // Optionally handle errors here, e.g., set a default user or display an error message
        }
      };
  
      fetchData()
  },[flag])

  return (
    <AppContext.Provider value={{ user, setUser,flag,setFlag}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
