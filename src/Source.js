import React, { useContext, useEffect } from 'react';
import Spinner from './Spinner';
import { Appcontext } from './context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Source = () => {
    const { loading, Source, sources,country,setcountry } = useContext(Appcontext);
    const navigate = useNavigate();

    function val_change() {
        const boxes = document.getElementsByClassName('Box');
        if (boxes.length > 0) {
            const val = boxes[0].value.toLowerCase().substring(0, 2);
            console.log("this is the value of val");
            console.log(val);
            setcountry(val);
            boxes[0].disabled = false;
        }
    }
    
  

    useEffect(() => {
        sources();
    }, []);

    return (
        <div>

<div>
    
    <p>so which country's sources you wanna find</p>
    <input  className='Box' type='text' onChange={()=>{
        console.log("this is onchange function")
    }} />
    <button  onClick={val_change} >Search</button>
    
    
    </div>

            {loading ? (
                <Spinner />
            ) : Source.length === 0 ? (
                <p>No posts found</p>
            ) : (
                Source.filter((src) => src.country === `${country}`).map((item) => (
                    <div key={item.id}>
                       
                        <p>this is a {item.category} page</p>
                        <p>this is {item.description}</p>
                        <p>this is {item.country}</p>
                        <a href={item.url}  target='main'>link to website</a>
                        <p> By - {item.name}</p>
                    </div>
                ))
            )}
<div>
        <button  style={{justifyContent:'center', alignItems:'center'}}  onClick={()=> navigate('/')}  >Go to Home page</button>
      </div>

        </div>
    );
};

export default Source;
