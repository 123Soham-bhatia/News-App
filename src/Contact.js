import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us through various channels. We are here to assist you!</p>

      <div className="contact-methods">
        <div className="contact-item">
          <span>Email:</span>
          <a href="mailto:your_email@example.com">your_email@example.com</a>
        </div>
        <div className="contact-item">
          <span>Social Media:</span>
          <div className="social-media-links">
            <a href="https://www.facebook.com/your_page" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://twitter.com/your_page" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
        <div className="contact-item">
          <span>Other Channels:</span>
          <p>
            Connect with us on other platforms such as Instagram, LinkedIn, or visit our physical office.
            {/* Add additional contact methods */}
          </p>
        </div>
      </div>
      <div>
        <button  style={{justifyContent:'center', alignItems:'center'}}  onClick={()=> navigate('/')}  >Go to Home page</button>
      </div>
    </div>
  );
};

export default Contact;
