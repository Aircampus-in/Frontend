import React, {useState, useContext} from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import Reaction from './Reaction';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';


function Article(props){


    const {darkMode} = useContext(DarkModeContext)

    const{id, img, removeArticle, title} = props;

    const[likeCounter, setLikeCounter] = useState(0);
    const[commentCounter, setcommentCounter] = useState(0);
    const[value, setValue] = useState('');
    const[comments, setComments] = useState([]);

    const incrementLike=(e)=>{
    e.preventDefault();
    setLikeCounter(likeCounter + 1);
    }
    
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setComments([
                ...comments,
                    {
                    comment: value,
                    }
                ]);
        setcommentCounter(comments.length + 1);
        setValue('');

    }

        

        return(
        <div className = {darkMode ? "container-article container-article-dark" : "container-article container-article-light"}>
            <img className="article-img"src= {img} alt="" />
                <h2 className="article-title">{title}</h2>
                <p className="article-para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto, quibusdam voluptates. Placeat atque eos laudantium eum maxime ea quis, qui nihil ipsum nisi impedit excepturi ullam debitis quam est? Eligendi...</p>
                <button className="article-btn">Read More</button>
                <button className="remove-btn" onClick={()=>removeArticle(id)}>Remove</button>
                <Reaction 
                likeCounter={likeCounter} 
                commentCounter={commentCounter} 
                incrementLike={incrementLike}/>

                <CommentForm 
                value={value} 
                comments={comments} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} />
        </div>
    );
    
}


Article.propTypes={
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    removeArticle: PropTypes.func.isRequired
}

export default Article