import React, {createContext, useState} from 'react';

const DarkModeContext = createContext();

function DarkModeProvider(props){
    console.log(props.children)
    const [darkMode, setDarkMode ] = useState(false);

    const toggleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
} 

export {DarkModeContext, DarkModeProvider}