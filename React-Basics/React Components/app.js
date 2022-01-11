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


function Article(props){
    return(
        <div className = "container-article">
            <img className="article-img"src= {props.img} alt="" />
                <h2 className="article-title">{props.title}</h2>
                <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi...</p>
                <button className="article-btn">Read More</button>
                <button className="remove-btn" onClick={()=>props.removeArticle(props.id)}>Remove</button>
                <Reaction />
                <CommentForm/>
            
        </div>
    );
}


class Reaction extends React.Component{

    state ={
        likes : 0,
        comments : 0
    }

    
    incrementLike=()=>{
        this.setState(prevState =>({
            likes : prevState.likes + 1
        }));
    }

    render(){
        return(
            <div className="reaction-container">
                <a className="like" onClick={this.incrementLike}>
                    {
                    this.state.likes === 0 ? 
                    <i className="far fa-heart fa-2x"></i>
                     : 
                    <i className="fas fa-heart fa-2x"></i>
                    }
                </a>
                <span className="like-counter">{this.state.likes}</span>
                <a className="comment" href="">
                    <i className="fas fa-comment fa-2x"></i>
                </a>
                <span className="comment-counter">{this.state.comments}</span>
            </div>
    );
    }
        
}


class CommentForm extends React.Component{
    render(){
        return(
            <form className="form-container">
                <input type="text" className="comment-box"/>
                <button className="comment-btn"><i class="fas fa-caret-square-right fa-3x"></i></button>
            </form>
        )
    }
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



class App extends React.Component{

   state={
        articles : [
        { title: "The Mountains are Calling",
        img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:1 },

        {title: "The Setting Sun",
        img:"https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        id:2},

        { title: "Of Wooden Cottages and Snowy Mountains",
        img:"https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:3},
        
        {title: "Food is Happiness", img:"https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:4}
        ]
    }


    handleRemoveArticle=(id)=>{
        this.setState(prevState=>({
            articles: prevState.articles.filter(article => article.id !== id)
        }));
    }
        


    render(){
        return(
        <div>
            <Header />
            {this.state.articles.map((article)=><Article 
            title={article.name} 
            img={article.img} 
            id={article.id}
            key={article.id.toString()}
            removeArticle={this.handleRemoveArticle}/>)}
            <Footer/>
        </div>
    );
    }
    
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
