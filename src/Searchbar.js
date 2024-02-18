import React, { useContext } from 'react';
import { Appcontext } from './context/Appcontext';
// import { Appcontext } from './context/Appcontext';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Searchbar = () => {
    const navigate = useNavigate();
    // const rasta = useNavigate();
    const{fetchdata_search,topic,settopic,setpage} = useContext(Appcontext)

    function changes() {
        const buttonElement = document.getElementsByClassName('butt')[0];
        buttonElement.style.display = 'block';
    }

const topic_data=()=>{
    const data = document.getElementsByClassName('input_box');
    fetchdata_search(topic);
    setpage(1);
    data.value = " ";
    navigate(`/topic/${topic}`);
    // rasta('/topic');
    
    
}

    return (
        <div>
            <span style={{ display: 'flex' , background:'#D3D3D3', width:'550px',height:'34px',marginTop:'20px' }}>
                <input onChange={(e)=>settopic(e.target.value)}
                    className='input_box'
                    onClick={changes}
                    style={{ width: '500px', border: '0', outline: 'none',textAlign:'center',fontSize:'20px', background:'none',color:'black' }}
                    type='text'
                    placeholder='Search here'
                />
               
          <button  onClick={topic_data} className='butt' style={{ display: 'none' }}>             
          search
           
           </button>
            </span>
        </div>
    );
}

export default Searchbar;
