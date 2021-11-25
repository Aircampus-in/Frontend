import React from 'react'
import Tweet from './Tweet';

const Tweets=()=>{
    const tweets=[
        {name: "Souvik", tweet: "Hello everyone!!"},
        {name: "Prakash", tweet: "Hey there!!"},
        {name: "Vaibhav", tweet: "Hii Bangalore!!"}
    ]

    return(
        <section>
            {tweets.map((tweet)=> (
            <Tweet name={tweet.name} tweet={tweet.tweet}/>
            ))}
        </section>
    );

};

export default Tweets;