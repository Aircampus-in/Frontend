import './App.css';
import { DarkModeProvider } from './context/DarkModeContext';
import Home from './components/Home';
import Headlines from './components/Headlines';
import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import SignIn from './components/SignIn';
import Contact from './components/Contact';



function App(){


    const[articles, setArticles] = useState([
        { title: "The Mountains are Calling",
        img:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:1 },

        {title: "The Setting Sun",
        img:"https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
        id:2},

        { title: "Of Wooden Cottages and Snowy Mountains",
        img:"https://images.unsplash.com/photo-1520984032042-162d526883e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:3},
        
        {title: "Food is Happiness", img:"https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        id:4}
        ]) 

   

    const handleRemoveArticle=(id)=>{
        setArticles(articles.filter(article => article.id !== id));
    }

    return(
        <DarkModeProvider>
                <Routes>
                    <Route path='/' element ={<Home articles={articles} handleRemoveArticle={handleRemoveArticle}/>}>
                    </Route>
                    <Route path='/headlines' element ={<Headlines/>}>
                    </Route>
                    <Route path='/contact' element ={<Contact/>}>
                    </Route>
                    <Route path='/signin' element ={<SignIn/>}>
                    </Route>
                    <Route path='*' element ={<ErrorPage/>}>
                    </Route>
                </Routes>
        </DarkModeProvider>
    );
    
}


export default App;
