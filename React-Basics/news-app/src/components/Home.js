import React from 'react';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Home({ handleRemoveArticle, data}) {


  return (
    <div>
        <Header/>
        {/* {loading && <div className="loading">News Loading...</div>}
        {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
        )} */}
        {data && data.map(({title, img, id})=>(<Article 
        // desc = {content}
        title={title} 
        img={img} 
        id={id}
        key={id.toString()}
        // url={url}
        removeArticle={handleRemoveArticle}/>))}
        <Footer/>
    </div>
  );
}

export default Home;
