function Header(){
    return(
        <header>
        <div className="container">
            <nav className="navbar">
                <h1><a href="/">News App</a></h1>
                <ul className="nav-links">
                    <li className="nav-item"><a href="/">Headlines</a></li>
                    <li className="nav-item"><a href="/">About</a></li>
                    <li className="nav-item"><a href="/">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}

export default Header; 