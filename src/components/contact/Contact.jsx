import './../contact/Contact.css';
import Heading from './../../components/headingname/Heading';

import Email from './../../assets/footer/email.png';
import PhoneIcon from './../../assets/footer/Phone-call.png'; // ✅ renamed
import Location from './../../assets/project/Location.png';
import Linkdin from './../../assets/footer/Linkdin.png';

function ContactDeatils() {
  return (
    <>
           <Heading heading="Get In Touch"/>

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
          <form class="contact-form">
            
              <label for="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" required />
           
             
              <label for="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            
              <label for="message">Write your message here</label>
              <textarea id="message" placeholder="Enter your message" rows="10" required></textarea>
              <button className='submit-btn'>Let's Go</button>

          </form>
        </div>

      </div>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div>
        <ContactDeatils />
      </div>
    </>
  );
}

export default Contact;
