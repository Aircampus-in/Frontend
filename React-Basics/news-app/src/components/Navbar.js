import React, { Component } from 'react'
import '../App.css'

export default class Navbar extends Component {
    render() {
        return (
            <header className="header">
                <div className="navbar container">
                    <a href="/" className="navbar-brand">
                        <i class="fas fa-newspaper fa-3x"></i>
                        <h1 className="app-name">KeyNewsApp</h1>
                    </a>
                    <nav>
                        <ul className="nav">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Hot-Today</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
        )
    }
}
