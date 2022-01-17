import React from 'react';


class Reaction extends React.Component{

    render(){
        // console.log(this.props.incrementLike)
        return(
            <div className="reaction-container">
                <a className="like" href="/" onClick={this.props.incrementLike}>
                    {
                    this.props.likeCounter === 0 ? 
                    <i className="far fa-heart fa-2x"></i>
                     : 
                    <i className="fas fa-heart fa-2x"></i>
                    }
                </a>
                <span className="like-counter">{this.props.likeCounter}</span>
                <a className="comment" href="/">
                    <i className="fas fa-comment fa-2x"></i>
                </a>
                <span className="comment-counter">{this.props.commentCounter}</span>
            </div>
    );
    }
        
}

export default Reaction