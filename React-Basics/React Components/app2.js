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


class Article extends React.Component{

    render(){
        console.log(this.props.likeCounter)
        return(
        <div className = "container-article">
            <img className="article-img"src= {this.props.img} alt="" />
                <h2 className="article-title">{this.props.title}</h2>
                <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi...</p>
                <button className="article-btn">Read More</button>
                <button className="remove-btn" onClick={()=>this.props.removeArticle(this.props.id)}>Remove</button>
                <Reaction likeCounter={this.props.likeCounter} commentCounter={this.props.commentCounter} incrementLike={this.props.incrementLike}/>
                {/* <Comments/> */}
                <CommentForm addComment={this.props.addComment} value={this.props.value} comments={this.props.comments} onChange={this.props.onChange}/>
        </div>
    );
    }
    
}


class Reaction extends React.Component{



    render(){
        // console.log(this.props.incrementLike)
        return(
            <div className="reaction-container">
                <a className="like" onClick={this.props.incrementLike}>
                    {
                    this.props.likeCounter === 0 ? 
                    <i className="far fa-heart fa-2x"></i>
                     : 
                    <i className="fas fa-heart fa-2x"></i>
                    }
                </a>
                <span className="like-counter">{this.props.likeCounter}</span>
                <a className="comment" href="">
                    <i className="fas fa-comment fa-2x"></i>
                </a>
                <span className="comment-counter">{this.props.commentCounter}</span>
            </div>
    );
    }
        
}


// class Comments extends React.Component{
//     state={
//         comments: [
//             {comment: "Hello", id: 1}
//         ]
//     }

//     render(){
//         return(
//             <div>
//             {this.state.comments.map((c)=><p key={c.id.toString()}>{c.comment}</p>)}
//         </div>
//         )  
//     }
// }

class CommentForm extends React.Component{


    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addComment(this.props.value);

    }

    render(){
        return(
            <div>
                {this.props.comments.map((c)=><p key={c.id.toString()}>{c.comment}</p>)}
                <form className="form-container" onSubmit={this.handleSubmit}> 
                <input type="text" placeholder="Enter Comment"  className="comment-box" onChange={this.props.onChange}/>
                <button className="comment-btn"><i className="fas fa-arrow-right fa-2x"></i></button>
            </form>
            </div>
            
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
        ],
        value: "",
        comments: [],
        likeCounter : 0,
        commentCounter : 0
    }



    
    incrementLike=()=>{
        this.setState(prevState =>({
            likeCounter : prevState.likeCounter + 1
        }));
    }


    handleRemoveArticle=(id)=>{
        this.setState(prevState=>({
            articles: prevState.articles.filter(article => article.id !== id)
        }));
    }


     handleChange=(e)=>{
        // console.log(e.target.value)
        this.setState({
            value: e.target.value
        });
    }
        
    // Initiating previous player ID
    prevCommentId = -1;



    handleAddComment=(comment)=>{
        
        this.setState(prevState=>{
            return{
                comments: [
                ...prevState.comments,
                    {
                    comment: comment,
                    id: this.prevCommentId += 1
                    }
                ],
                value: ""
        };
            
        })
    }


    render(){
        return(
        <div>
            <Header />
            {this.state.articles.map((article)=><Article 
            title={article.title} 
            img={article.img} 
            id={article.id}
            key={article.id.toString()}
            removeArticle={this.handleRemoveArticle}
            addComment={this.handleAddComment}
            value={this.state.value}
            comments = {this.state.comments}
            onChange={this.handleChange}
            likeCounter={this.state.likeCounter}
            commentCounter={this.state.commentCounter}
            incrementLike={this.incrementLike}/>)}
            <Footer/>
        </div>
    );
    }
    
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
