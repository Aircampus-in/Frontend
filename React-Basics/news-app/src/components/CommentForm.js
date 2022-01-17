import React from 'react';

class CommentForm extends React.Component{

    render(){
        return(
            <div>
                <div>
                    {this.props.comments.map((c)=><p key={c.id.toString()}>{c.comment}</p>)}
                </div>
                <form className="form-container" onSubmit={this.props.handleSubmit}> 
                <input type="text" value={this.props.value} placeholder="Enter Comment"  className="comment-box" onChange={this.props.handleChange}/>
                <button className="comment-btn"><i className="fas fa-arrow-right fa-2x"></i></button>
                </form>
            </div>
            
        )
    }
}

export default CommentForm