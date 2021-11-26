import React from 'react'
import Tweet from './Tweet';
import '../App.css'

const Tweets=()=>{
    const tweets=[
        {name: "Souvik", tweet: "Hello everyone!!"},
        {name: "Prakash", tweet: "Hey there!!"},
        {name: "Vaibhav", tweet: "Hii Bangalore!!"}
    ]

    return(
        <section className="tweets">
            {tweets.map((tweet, index)=> (
            <Tweet key={index} name={tweet.name} tweet={tweet.tweet}/>
            ))}
        </section>
    );

};

export default Tweets;