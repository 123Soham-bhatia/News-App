
import React, { useContext } from 'react';
import footer from './footer.png';
import { Appcontext } from './context/Appcontext';
import {  useNavigate } from 'react-router-dom';

const Footer = () => {
    const{fetchdata_search,setpage,settopic} = useContext(Appcontext);
const naivgate = useNavigate();

const to_topic = (e) => {
    const selectedTopic = e.target.textContent.toLowerCase();
    settopic(selectedTopic);
    fetchdata_search(selectedTopic);
    setpage(1);
    naivgate(`/topic/${selectedTopic}`);
  };
  
    return (
        <div style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center',color:'white' }} className='footer'>
            <div    className='buttstt'  style={{ display: 'flex', gap: '10px' }}>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold',  }}>THE NEWS POSTMAN</li>
                        <li>  <button  onClick={()=>naivgate('/about')}  >About us</button>  </li>
                        <li>    <button  onClick={()=>naivgate('/members')}  >Members</button></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>OTHER</li>
                        <li>   <button  onClick={()=>naivgate('/source')}  >Sources</button>  </li>
                        <li>   <button  onClick={()=>naivgate('/contact')}  > Contact us</button> </li>
                        <li>   <button  onClick={()=>naivgate('/faqs')}  >FAQs</button>  </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>UTs</li>
                        <li>   <button  onClick={to_topic}  > Puducherry</button> </li>
                        <li>   <button  onClick={to_topic}  > Lakshadweep</button> </li>
                        <li>   <button  onClick={to_topic}  > Andaman and Nicobar</button> </li>
                        <li>   <button  onClick={to_topic}  >  Chandigarh</button></li>
                        <li>   <button  onClick={to_topic}  >  Dehli</button></li>
                        <li>   <button  onClick={to_topic}  >  DAdra and NAgar Haveli</button></li>
                        <li>   <button  onClick={to_topic}  > J&K</button> </li>
                        <li>   <button  onClick={to_topic}  > Ladakh</button> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>Sci-Tech</li>
                        <li>   <button  onClick={to_topic}  > Science</button> </li>
                        <li>   <button  onClick={to_topic}  > Technology</button> </li>
                        <li>   <button  onClick={to_topic}  > Health</button> </li>
                        <li>   <button  onClick={to_topic}  >  Agriculture</button></li>
                        <li>   <button  onClick={to_topic}  > Gadgets</button> </li>
                        <li>   <button  onClick={to_topic}  > Internet</button> </li>
                        <li>   <button  onClick={to_topic}  > Environment</button> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>Business</li>
                        <li>   <button  onClick={to_topic}  > Agri-Business</button> </li>
                        <li>   <button  onClick={to_topic}  > Industry</button> </li>
                        <li>   <button  onClick={to_topic}  >  Economy</button></li>
                        <li>   <button  onClick={to_topic}  >  Markets</button></li>
                        <li>   <button  onClick={to_topic}  > Budget</button> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>Cities</li>
                        <li>   <button  onClick={to_topic}  > Mumbai</button> </li>
                        <li>   <button  onClick={to_topic}  > Bangalore</button> </li>
                        <li>   <button  onClick={to_topic}  > Chennai</button> </li>
                        <li>   <button  onClick={to_topic}  > Gurugram</button> </li>
                        <li>   <button  onClick={to_topic}  > Kolkata</button> </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li style={{ fontWeight: 'bold' }}>FAQs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
