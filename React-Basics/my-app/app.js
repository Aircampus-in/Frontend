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


function Article(props){
    return(
    <div className = "container-article">
        <img className="article-img"src= {props.img} alt="" />
            <h2 className="article-title">{props.title}</h2>
            <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi...</p>
            <button className="article-btn">Read More</button>
            <Reaction/>
    </div>
    );
    
}


class Reaction extends React.Component{

    constructor(){
        super()
        this.state={
            likes: 0,
            comments: 0
        }
    }

    incerementLike(){
        // console.log(this)
        this.setState(prevState=>({
            likes: prevState.likes+1
        }))
    }
    render(){
        // console.log(this)
        return(
            <div className="reaction-container">
                <a className="like" onClick={()=>this.incerementLike()}>
                    <i className="fas fa-heart fa-2x"></i>
                </a>
                <span className="like-counter">{this.state.likes}</span>
                <a className="comment">
                    <i className="fas fa-comment fa-2x"></i>
                </a>
                <span className="comment-counter">{this.state.comments}</span>
            </div>
    );
    }
        
}


function Footer(){
    return(
        <footer>
            <div className="container">
                <ul className="social">
                    <li className="social-item"><a href="/">Twitter</a></li>
                    <li className="social-item"><a href="/">LinkedIn</a></li>
                    <li className="social-item"><a href="/">Instagram</a></li>
                </ul>

            </div>
            
        </footer>
    );
}

class App extends React.Component{

    render(){
        return(
        <div>
            <Header />
            <Article title= "The Mountains are Calling" img="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <Article title= "The Setting Sun" img="https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"/>
            <Article title= "Of Wooden Cottages and Snowy Mountains" img="https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <Article title="Food is Happiness" img="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
            <Footer/>
        </div>
    );
    }
    
}

ReactDOM.render(
    <App/>,
  document.getElementById('root')
);