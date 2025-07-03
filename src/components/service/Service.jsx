import './../service/Service.css';
import Heading from '../headingname/Heading';

import Tagimg from './../../assets/services/Tagimg.png';
import Uiimg from './../../assets/services/Uiimg.png';

const SERVICES = [
  {
    servicesimg: Tagimg,
    servicename: "Web Development",
    serviceinfo: "As a web developer,I create dynamic and functional websites using a combination of front-end and back-end technologies. I specialize in building responsive, user-friendly interfaces that enhance the user experience. Whether it’s an e-commerce site, a blog, or a custom web application, I bring ideas to life through code.",
  },
  {
    servicesimg: Uiimg,
    servicename: "UI Designing",
    serviceinfo: "UI design is all about aesthetics and usability. As a UI designer, I craft visually appealing layouts, choose color schemes, and create intuitive navigation. I pay attention to details like typography, spacing, and consistency. My designs aim to enhance the overall look and feel of your digital product.",
  },
  {
    servicesimg: Tagimg,
    servicename: "UX Development",
    serviceinfo: "UI (User Interface) development focuses on creating the visual elements of a website or application. I specialize in turning design mockups into interactive interfaces using HTML, CSS, and JavaScript. My goal is to ensure that users have a seamless and enjoyable experience while interacting with your product.",
  },
]

function Servicecard(props) {
  const { servicesimg, servicename, serviceinfo } = props;
  return (
    <div>
      <div className='service-container'>
        <div className='service-box'>
        <img src={servicesimg} />
        <h2>{servicename}</h2>
        <p>{serviceinfo}</p>
        </div>
       
      </div>
    </div>

  );
}

export function Service(){
  return (
    <div>
      <Heading heading="My service" />
      <div className='service-mapping'>
        {SERVICES.map((card, i) => {
          return (
            <Servicecard key={i}
              servicesimg={card.servicesimg}
              servicename={card.servicename}
              serviceinfo={card.serviceinfo}
            />);
        })
        }
      </div>
    </div>
  )

};

export default Service;