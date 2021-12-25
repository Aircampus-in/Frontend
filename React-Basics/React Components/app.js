function Header(){
    return(
        <header>
        <div className="container">
            <nav className="navbar">
                <h1><a href="">News App</a></h1>
                <ul className="nav-links">
                    <li className="nav-item"><a href="">Headlines</a></li>
                    <li className="nav-item"><a href="">About</a></li>
                    <li className="nav-item"><a href="">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    );
}


function Article(){
    return(
        <div className = "container-article">
            <img className="articlee-img"src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <h2 className="article-title">The Mountains are Calling</h2>
            <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi.</p>
            <button className="article-btn">Read More</button>
        </div>
    );
}

function Footer(){
    return(
        <footer>
            <div className="container">
                <ul className="social">
                    <li className="social-item"><a href="">Twitter</a></li>
                    <li className="social-item"><a href="">LinkedIn</a></li>
                    <li className="social-item"><a href="">Instagram</a></li>
                </ul>

            </div>
            
        </footer>
    );
}

function App(){
    return(
        <div>
            <Header/>
            <Article/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
