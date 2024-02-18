import React, { useContext, useEffect } from 'react';
// import Spinner from './Spinner';
import Spinner from './Spinner';
import Pagination from './Pagination';
import { Appcontext } from './context/Appcontext';


const Card = () => {
    const{loading,articles,fetchdata,page,sources,theme} = useContext(Appcontext);
    
    useEffect(()=>{
        fetchdata();
        sources();
    },[])
   
    return <div>
        <div>
<h1 className='heading' style={{textAlign:'center', color:'black'}} > All About India....</h1></div>

{loading? (
<div style={{margin:'400px'}} ><Spinner /></div>
): (articles.slice(5*(page-1),5*(page)).map((article,index)=>(
    <div  style={{margin:'80px',justifyContent:'center',textAlign:'center' ,backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius:'20px'}}  key={index} >

        <p style={{fontStyle:'italic', color: theme?'brown':'rgba(0,0,0)', fontSize:'25px'}} >{article.source.name}</p>

    <img style={{width:'700px', height:'auto'}}  src={article.urlToImage} alt='img' />

    <div style={{ textAlign :'center',fontSize:'20px',margin:'10px',marginTop:'8px', }} >{article.content}</div>

    <p style={{fontSize:'20px'}} >{article.title}....  <button style={{outline:'none' , border:'0',
    fontSize:'18px',background:'none'}} ><a  style={{textDecoration:'none',color:theme?'':'rgb(0,0,0)'}}  href={article.url} target='main'>Read More</a></button></p>
   
    
      <p style={{ textAlign:'center'}} ><h4 style={{fontStyle:'bolder'}} > By - {article.author === null ? <p>unknown source</p>:article.author}</h4></p> 
      <p>posted on {article.publishedAt.slice(0,10)} at {article.publishedAt.slice(11,19)} </p>

    </div>
    
)))}
<Pagination />


    </div>;
}

export default Card;