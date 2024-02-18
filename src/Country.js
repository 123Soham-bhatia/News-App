import React from 'react';
import Searchbar from './Searchbar'


const Country = () => {
    return <div>
    
    <div  style={{justifyContent:'center',alignItems:'center',textAlign:'center'}}  >
    <Searchbar />
    </div>
    <div style={{display:'flex',justifyContent:"space-between",marginTop:'50px', padding:'20px'}}>
        <div><button  style={{width:'200px',fontSize:'25px'}} >India</button></div>
        <div><button  style={{width:'200px',fontSize:'25px'}} >America</button></div>
        <div><button  style={{width:'200px',fontSize:'25px'}} >Japan</button></div>
        <div><button  style={{width:'200px',fontSize:'25px'}} >China</button></div>
        <div><button  style={{width:'200px',fontSize:'25px'}} >Uk</button></div>
    </div>
    
    </div>;
}

export default Country;