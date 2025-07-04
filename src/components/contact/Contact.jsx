import './../contact/Contact.css';
import Heading from './../../components/headingname/Heading';
import React, { useState } from 'react';


import Email from './../../assets/footer/email.png';
import PhoneIcon from './../../assets/footer/phone-call.png';
import Location from './../../assets/project/Location.png';
import Linkdin from './../../assets/footer/linkdin.png';

function ContactDeatils() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "003b71fa-e00b-41d4-a257-a2fe662bcb5e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Submitted Successfully !!😊");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <Heading heading="Reach Out"/>

      <div className='conatct-content'>
        <div className='contact-detail'>
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to send
            me a message about anything that you want me to work on.
            You can contact me anytime.
          </p>
          <div className='social-media'>
            <p><img src={Email} alt="Email" /> nidhinagpure21@gmail.com</p>
            <p><img src={PhoneIcon} alt="Phone" /> +91 9284011752</p>
            <p><img src={Location} alt="Location" /> Nagpur, Maharashtra</p>
            <a href='https://www.linkedin.com/in/nidhi-nagpure-160110283/'
              target='_blank' style={{ textDecoration: "none", color: 'black' }}>
              <p><img src={Linkdin} />Linkdin</p></a>
          </div>
        </div>

        <div>
          <form onSubmit={onSubmit} className="contact-form">
            
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
           
             
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            
              <label htmlFor="message">Write your message here</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="10" required></textarea>
              <button type='submit' className='submit-btn'>Let's Go</button>
              <span className='result'>{result}</span>
          </form>
        </div>

      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div id='contact'>
        <ContactDeatils />
      </div>
    </>
  );
}

export default Contact;
