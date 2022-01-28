import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Home({articles, handleRemoveArticle}) {
  return (
    <div>
        <Header/>
        {articles.map((article)=><Article 
        title={article.title} 
        img={article.img} 
        id={article.id}
        key={article.id.toString()}
        removeArticle={handleRemoveArticle}/>)}
        <Footer/>
    </div>
  );
}

export default Home;
