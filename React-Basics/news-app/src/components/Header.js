import { DarkModeContext } from "../context/DarkModeContext";
import {useContext} from 'react';
function Header(){

    const{darkMode, toggleDarkMode} = useContext(DarkModeContext)
    return(
        <header className={
            darkMode ? 
            "header header-dark" : 
            "header header-light"}>
        <div className={
            darkMode ? 
            "container container-light" : 
            "container container-light"}>
            <nav className="navbar">
                <h1><a className={
                    darkMode ? 
                    "brand brand-dark": 
                    "brand brand-light"} href="/">News App</a></h1>
                <ul className={
                    darkMode ? 
                    "nav-links nav-links-dark" : 
                    "nav-links nav-links-light"}>
                    <li className="nav-item"><a href="/">Heading</a></li>
                    <li className="nav-item"><a href="/">About</a></li>
                    <li className="nav-item"><a href="/">Contact</a></li>
                    <button className={
                        darkMode ? 
                        "toggle-theme dark" : 
                        "toggle-theme light"} onClick={toggleDarkMode}>{darkMode ? 
                        <i className="fas fa-moon fa-2x"></i> : 
                        <i className="fas fa-sun fa-2x"></i>}</button>
                </ul>
            </nav>
        </div>
    </header>
    );
}



export default Header; 