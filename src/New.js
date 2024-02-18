import React from 'react';
// import { useNavigate} from 'react-router-dom';

const New = () => {
    // const rasta = useNavigate();

    const go_to_home = () =>{
        // rasta('/')
    }
    return <div>
         <div>
    <p>this is a new page</p>
    <button onClick={go_to_home} > home</button>
    <button onClick={(e)=>{
      console.log(e.target.innerText)
    }} >button</button>
  </div>
    </div>;
}

export default New;