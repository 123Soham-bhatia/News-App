import './App.css';
import Whole from './whole';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Topic from './Topic';
import Category from './Category';
import Nav from './Nav';
import Source from './Source';
import About from './About';
import Contact from './Contact';
import Faqs from './Faqs';
import Members from './Members';
import Country from './Country';
import SignUp from './SignUp';
import { useContext } from 'react';
import { Appcontext } from './context/Appcontext';
// import Starting from './Starting'

function App() {
 const {topic} = useContext(Appcontext)
  return (
 
    <div className="App">
       {/* <Starting />/ */}
     
      <BrowserRouter>
      <Routes>
       
        <Route  exact path='/' element={ <Whole />}     />
        <Route exact path={`/topic/${topic}`} element={<Topic />} />
        <Route  exact path='/category'   element={<Category />} />
        <Route   exact path='/nav'   element={<Nav />}   />
        <Route   exact path='/source'  element={<Source />}  />
        <Route  exact path='/about'   element= {<About />}   />
        <Route  exact path='/contact' element={<Contact />}   />
        <Route  exact path='/faqs' element={<Faqs />}   />
        <Route  exact path='/members'  element={<Members />} />
        <Route exact path='/international' element={<Country />}      />
        <Route  exact path='/signup'    element={<SignUp />}   />
      </Routes>
      </BrowserRouter>
     
    </div>
  
  );
}

export default App;

