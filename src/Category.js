// import React, { useContext } from 'react';
// import { Appcontext } from './context/Appcontext';
// import { useNavigate } from 'react-router-dom';

// const Category = () => {
//     const navigate = useNavigate();
//     const{fetchdata_search,topic,settopic,setpage} = useContext(Appcontext);
     
// const buttonsearch=(e)=>{
//     settopic(e.target.textContent);
//     fetchdata_search(topic);
//     setpage(1);
//     navigate('/topic');
// }



//     return <div  style={{justifyContent:'center' , alignItems:'center'}} >
//         <div class="flex-container">
//  <button  onClick={buttonsearch} > <div className="box">Bitcoin</div></button> 
//    <button  onClick={buttonsearch}  > <div className="box">Sports</div></button>
//    <button  onClick={buttonsearch}  > <div className="box">parliament</div></button>
//    <button  onClick={buttonsearch}  > <div className="box">Upsc</div></button>
//    <button  onClick={buttonsearch}  > <div className="box">Prime minister</div></button>
  
//   </div>

//     </div>;
// }

// export default Category;

import React, { useContext } from 'react';
import { Appcontext } from './context/Appcontext';
import { useNavigate } from 'react-router-dom';

const Category = () => {
    const navigate = useNavigate();
    const { fetchdata_search, settopic, setpage} = useContext(Appcontext);
     
    const buttonsearch = (e) => {
        const selectedTopic = e.target.textContent.toLowerCase();
        settopic(selectedTopic);
        fetchdata_search(selectedTopic);
        setpage(1);
        navigate(`/topic/${selectedTopic}`);
      };
      

    return (
        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
            <div className="flex-container">
                <button onClick={buttonsearch}> <div className="box">Bitcoin</div></button>
                <button onClick={buttonsearch}> <div className="box">Sports</div></button>
                <button onClick={buttonsearch}> <div className="box">parliament</div></button>
                <button onClick={buttonsearch}> <div className="box">Upsc</div></button>
                <button onClick={buttonsearch}> <div className="box">Prime minister</div></button>
            </div>
        </div>
    );
}

export default Category;
