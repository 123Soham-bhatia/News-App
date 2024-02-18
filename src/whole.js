import React, { useContext } from 'react';
import Card from './card';

import Searchbar from './Searchbar';
import Heading from './heading';
import Footer from './Footer';
import { Appcontext } from './context/Appcontext';



const Whole = () => {
    const {theme}  = useContext(Appcontext);

    return <div  className={`whole_${theme}`} >

<div style={{marginTop:'0px',backgroundColor:theme? 'white': 'rgba(0,0,0,0.95',color:theme? 'black':'white',borderBottom: theme? '':'2px solid white',borderTop: theme? '':'2px solid white', boxShadow:theme?'':'0px 2px 4px rgba(0,0,0.1)'}}  >
<Heading  /></div>

<div    >
      <div style={{justifyContent:'center', textAlign:'center', alignItems:'center',marginLeft:'450px',marginTop:'30px'}} >  <Searchbar />
      </div>
      
      <Card />
      </div>
      <Footer />
 
     
    </div>;
}
export default Whole;