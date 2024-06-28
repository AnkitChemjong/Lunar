import {createContext} from 'react';

export const AppContext=createContext();

const ContextProvider=(props)=>{
    const phone="+1 121212121";
    const name="Ankit Chemjong"
    return(
        <AppContext.Provider value={{phone,name}}>
          {props.children}
        </AppContext.Provider>
    )
}
export default ContextProvider;