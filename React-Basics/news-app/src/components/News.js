import React, { Component } from 'react'
import '../App.css'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className="col-3 container">
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}
