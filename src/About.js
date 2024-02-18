import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>About Us</h1>
     
      <p>
      Welcome to [Your E-News Channel], where information meets innovation! As a leading online news source, we are dedicated to providing you with a seamless and dynamic platform to stay informed about the latest happenings across the globe. Our commitment to delivering accurate, unbiased, and timely news is driven by the belief that an informed society is an empowered society.
      </p>
      <p>At The News , we embrace the digital era, harnessing the power of technology to bring you news that matters most. Our team of seasoned journalists and tech enthusiasts work tirelessly to curate a diverse range of stories, ensuring that you are always at the forefront of breaking news, insightful analyses, and engaging features.</p>
      <h2>Our Mission</h2>
      <p>
      Our mission extends beyond traditional reporting; we strive to create a vibrant online community where discussions thrive, opinions matter, and diverse perspectives are welcomed. As we navigate the digital landscape, our dedication to journalistic integrity remains unwavering, and we invite you to embark on this news journey with us.
      </p>
      <p>Whether you're seeking the latest headlines, in-depth articles, or a multimedia news experience, [Your E-News Channel] is your go-to destination. Thank you for being part of our news family, where every click, share, and comment contributes to shaping the future of news consumption. Stay connected, stay informed, and let's explore the world of news together!</p>
      <h2>Meet Our Team</h2>
      <p>
        [Your News Website] is made possible by the hard work and dedication of our talented team. Get to know the individuals who are passionate about bringing you the news: <div>
          <button  style={{background:'none',color:'black',borderBottom:'2px solid black'}} onClick={()=>navigate('/members')} >Go to members page</button>
        </div>
      </p>
      
   
      <div>
        <button  style={{justifyContent:'center', alignItems:'center'}}  onClick={()=> navigate('/')}  >Go to Home page</button>
      </div>
    </div>
  );
};

export default About;

