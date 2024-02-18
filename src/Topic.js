import React, { useContext } from 'react';
import { Appcontext } from './context/Appcontext';
import Spinner from './Spinner';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const Topic = () => {
  const navigate = useNavigate();
  const { searcharticles, loading, page,theme } = useContext(Appcontext);

  const revertback =()=>{
navigate(-1);
  }

  return (
    <div  style={{backgroundColor:theme?'white':'rgba(0,0,0,0.81)', color:theme? 'black':'white'}}  >

      <div    >
        <button  onClick={revertback} >Back</button>
      </div>
      <p>This is the topic page</p>
      {loading ? (
        <Spinner />
      ) : searcharticles.length === 0 ? (
        <p>No posts found</p>
      ) : (
        searcharticles.slice(5 * (page - 1), 5 * page).map((article, index) => (
          <div
            style={{
              margin: '80px',
              justifyContent: 'center',
              textAlign: 'center',
              backgroundColor: 'rgba(128, 128, 128, 0.2)',
              borderRadius: '20px',
            }}
            key={index}
          >
            <p style={{ fontStyle: 'italic', color: theme?'brown':'rgba(0,0,0)', fontSize: '25px' }}>{article.source.name}</p>
           
            <img style={{ width: '700px', height: 'auto' }} src={article.urlToImage} alt="img" />
            <div style={{ textAlign: 'center', fontSize: '20px', margin: '10px', marginTop: '8px' }}>
              {article.content}
            </div>
            <p style={{ fontSize: '20px' }}>
              {article.title}....{' '}
              <button style={{ outline: 'none', border: '0', fontSize: '18px',background:'none', }}>
                <a style={{textDecoration:'none',color:theme?'':'rgb(0,0,0,0.9)'}} href={article.url} target="_main">
                  Read More
                </a>
              </button>
            </p>
            <p style={{ textAlign: 'center' }}>
              <h4 style={{ fontStyle: 'bolder' }}>By - {article.author === null ? <p>unknown source</p> : article.author}</h4>
            </p>
            <p>Posted on {article.publishedAt.slice(0, 10)} at {article.publishedAt.slice(11, 19)}</p>
          </div>
        ))
      )}
      <Pagination />
      <Footer />
    </div>
  );
};

export default Topic;
