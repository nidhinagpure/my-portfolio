import './../contact/Contact.css';

import Email from './../../assets/footer/email.png';
import Contact from './../../assets/footer/Phone-call.png';
import Location from './../../assets/profile/Location.png';







function contactDeatils(){
  return(
    <>
    <div>
      <div>
        <h1>Let's Talk</h1>
        <p>I'm currently avaliable to take on 
          new projects, so feel free to send 
          me a message about anything that 
          you want me to work on. You can 
          contact anytime.</p>
      </div>
         <div>
           <h1><img src={Email}/>nidhinagpure21@gmail.com</h1>
           <h1><img src={Contact}/>91+ 9284011752</h1>
           <h1><img src={Location}/>Nagpur, Maharashtra</h1>


         </div>
        
    </div>
    
    </>
  )
}



export function Contact(){
  return (
    <>

       
    
    </>

  )
};

export default Contact;