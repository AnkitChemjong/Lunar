// AppContext.js
import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = createContext();

export const AppProvider =({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8080/user/get');
          setUser(response.user); // Assuming user data is in response.data
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Optionally handle errors here, e.g., set a default user or display an error message
        }
      };
  
      fetchData()
  })

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;