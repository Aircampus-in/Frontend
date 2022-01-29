import { DarkModeContext } from "../context/DarkModeContext";
import {useContext} from 'react';
import {Link} from 'react-router-dom';
function Header(){

    const{darkMode, toggleDarkMode} = useContext(DarkModeContext)

    console.log(darkMode)
    console.log(toggleDarkMode)
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
                <h1><Link className={
                    darkMode ? 
                    "brand brand-dark": 
                    "brand brand-light"} to="/">News App</Link></h1>
                <ul className={
                    darkMode ? 
                    "nav-links nav-links-dark" : 
                    "nav-links nav-links-light"}>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><Link to="/headlines">Headlines</Link></li>
                    <li className="nav-item"><Link to="/contact">Contact Us</Link></li>
                    <li className="nav-item"><Link to="/signin">Sign In</Link></li>
                    <button className={
                        darkMode ?
                        "toggle-theme dark" : 
                        "toggle-theme light"} onClick={toggleDarkMode}>{darkMode ? 
                        <i className="fas fa-sun fa-2x"></i>:
                        <i className="fas fa-moon fa-2x"></i>}</button>
                </ul>
            </nav>
        </div>
    </header>
    );
}



export default Header; 