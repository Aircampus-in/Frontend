import React, { Component } from 'react'
import '../App.css'

export default class NewsItem extends Component {
    render() {

        let{heading, img, desc} = this.props;
        return (
            <div className="news-card">
                <h2 className="news-heading">{heading}</h2>
                <img className="news-img" src={img} alt="news-img" />
                <p className="news-desc">{desc}</p>
                <button className="news-btn">Read More</button>
            </div>
        )
    }
}
