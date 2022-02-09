import { DarkModeContext } from "../context/DarkModeContext";
import {useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
function Header(){

    const{darkMode, toggleDarkMode} = useContext(DarkModeContext)

    console.log('header')
    // console.log(toggleDarkMode)
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
                    <li className="nav-item"><NavLink className= {(navData)=>navData.isActive? 'active': ''} to="/">Home</NavLink></li>

                    <li className="nav-item"><NavLink className= {(navData)=>navData.isActive? 'active': ''} to="/headlines">Headlines</NavLink></li>

                    <li className="nav-item"><NavLink className= {(navData)=>navData.isActive? 'active': ''} to="/contact">Contact Us</NavLink></li>

                    <li className="nav-item"><NavLink className= {(navData)=>navData.isActive? 'active': ''} to="/signin">Sign In</NavLink></li>
                    <button className={
                        darkMode ?
                        "toggle-theme dark" : 
                        "toggle-theme light"} onClick={toggleDarkMode}>{darkMode ? 
                        <i className="fas fa-sun fa-2x"></i>:
                        <i className="fas fa-moon fa-2x"></i>}
                    </button>

                </ul>
                <div>
                    <form>
                        <div className="search">
                            <input type="text" className={
                                darkMode?
                                "search-term search-term-dark" :
                                "search-term search-term-light"} 
                                placeholder="Search News"/>
                                
                            <button type="submit" className={
                                darkMode ?
                                "search-button search-button-dark" :
                                "search-button search-button-light"}>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </form>
                
                </div>
            </nav>
        </div>
    </header>
    );
}



export default Header; 