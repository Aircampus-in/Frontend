import React, { Component } from 'react'
import '../App.css'
import NewsItem from './NewsItem'

export default class News extends Component {
    render() {
        return (
            <div className="col-3 container">
                <NewsItem heading="Title" img="https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F62bb4d1e-fd49-4920-8815-8421029e0d65.jpg?source=next-opengraph&fit=scale-down&width=900" desc="lorem ipsum"/>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
            </div>
        )
    }
}
