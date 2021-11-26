import React from 'react'
import Tweet from './Tweet';
import { v4 as uuidv4 } from 'uuid';
import '../App.css'

const Tweets=()=>{
    const tweets=[
        {name: "Souvik", tweet: "Hello everyone!!", id=uuidv4()},
        {name: "Prakash", tweet: "Hey there!!", id=uuidv4()},
        {name: "Vaibhav", tweet: "Hii Bangalore!!", id=uuidv4()}
    ]

    return(
        <section className="tweets">
            {tweets.map((tweet)=> (
            <Tweet key={id} name={tweet.name} tweet={tweet.tweet}/>
            ))}
        </section>
    );

};

export default Tweets;