import React, { useEffect } from 'react';
import pic from './navbar.png'
import { useHistory } from 'react-router-dom';


const Starting = () => {
    const history = useHistory();
    useEffect(()=>{
        const timeoutId = setTimeout(() => {
            
            history.push('/');
      
          }, 3000);
    
          return () => clearTimeout(timeoutId);
        }, []);
    
    return <div style={{background:'#D3D3D3'}} >
<img src={pic}  alt='pictures' ></img>
    </div>;
}

export default Starting;