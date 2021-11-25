import React from 'react'


const Tweet=(props)=>{
    return (
        <div>
            <h1 className="name">{props.name}</h1>
            <span className="says">says</span>
            <h2 class="tweet">{props.tweet}</h2>
        </div>
    );
}
export default Tweet;