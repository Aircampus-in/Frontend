import React, { Component } from 'react'
import '../App.css'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="news-card">
                <h2 className="news-heading">Heading</h2>
                <img className="news-img" src="https://images.unsplash.com/photo-1542619147-5f08dc1ef985?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="news-img" />
                <p className="news-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab velit, aut animi laudantium consequuntur aliquam at repudiandae rerum voluptatum illo totam esse hic quia, facilis exercitationem beatae. Possimus, unde nam!</p>
                <button className="news-btn">Read More</button>
            </div>
        )
    }
}
