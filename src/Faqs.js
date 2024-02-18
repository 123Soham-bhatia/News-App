import React from 'react';
import { useNavigate } from 'react-router-dom';

const Faqs = () => {
    const navigate = useNavigate();
    return <div>
        <div  style={{textAlign:'center'}}  >
            <h2>FAQs</h2>
            <h4>How do I download and install the e-news app?</h4>
            <p>qwertyuqwertyui</p>

        <h4>Is the e-news app free to use?</h4>
        <p>qwertyuqwertyui</p>

        <h4>How can I customize my news feed?</h4>
        <p>qwertyuqwertyui</p>

        <h4>What types of news categories does the app cover?</h4>
        <p>qwertyuqwertyui</p>

        <h4>Can I save articles for offline reading?</h4>
        <p>qwertyuqwertyui</p>

        <h4>How do I share articles from the app?</h4>
        <p>qwertyuqwertyui</p>

        <h4>What security measures are in place to protect my data?</h4>
        <p>qwertyuqwertyui</p>
        <div>
        <button  style={{justifyContent:'center', alignItems:'center'}}  onClick={()=>navigate('/')}  >Go to Home page</button>
      </div>

        </div>
    </div>;
}

export default Faqs;