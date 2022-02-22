import React, { useState } from "react";
// import { connect } from "react-redux";


const NewComp = ()=> {

const[message, setMessage] = useState("Subscribe to AirCampus")



const handleClick = () => {
    setMessage("Thank you for subscribing");
};

    return (
        <div className="App">
            <h3 className="message">{message}</h3>
            <button onClick={handleClick}>Subscribe</button>
        </div>
    );
}


export default NewComp;
