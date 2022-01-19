import React from 'react';
import Reaction from './Reaction';
import CommentForm from './CommentForm'

class Article extends React.Component{

    state={
        likeCounter : 0,
        commentCounter : 0,
        value: '',
        comments: []          
    }

    incrementLike=(e)=>{
    e.preventDefault();
    this.setState(prevState =>({
        likeCounter : prevState.likeCounter + 1
    }));
    }
    
    handleChange=(e)=>{
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState(prevState=>{
            return{
                comments:[
                ...prevState.comments,
                    {
                    comment: prevState.value,
                    id: prevState.comments.length
                    }
                ],
                commentCounter: prevState.comments.length + 1,
                value: ''
            }
            
        })

    }

    render(){

        const{id, img, removeArticle, title} = this.props;

        console.log(this.props.title + 'is rendered')
        return(
        <div className = "container-article">
            <img className="article-img"src= {img} alt="" />
                <h2 className="article-title">{title}</h2>
                <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi...</p>
                <button className="article-btn">Read More</button>
                <button className="remove-btn" onClick={()=>removeArticle(id)}>Remove</button>
                <Reaction likeCounter={this.state.likeCounter} commentCounter={this.state.commentCounter} incrementLike={this.incrementLike}/>
                {/* <Comments/> */}
                <CommentForm value={this.state.value} comments={this.state.comments} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </div>
    );
    }
    
}

export default Article