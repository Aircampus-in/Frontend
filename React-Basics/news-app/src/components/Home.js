import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Home({articles, handleRemoveArticle, data, error, loading}) {

  console.log(data);
  return (
    <div>
        <Header/>
        {loading && <div>A moment please...</div>}
        {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data && data.map(({title, urlToImage, publishedAt, url})=>(<Article 
        title={title} 
        img={urlToImage} 
        id={publishedAt}
        key={url}
        removeArticle={handleRemoveArticle}/>))}
        <Footer/>
    </div>
  );
}

export default Home;
