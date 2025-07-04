
import './../education/Education.css';
import Heading from './../../components/headingname/Heading';

import Location from './../../assets/project/Location.png';


const EDUCATION = [
  {
    filed: "MCA",
    nameOfCollege: "G. H. Raisoni College of Engineering",
    Percentage:"CGPA -7.86%",
    locationIcon:Location,
    location: "Nagpur",

  },
  {
    filed: "BCCA",
    nameOfCollege: "Rashtrasant Tukadoji maharaj nagpur university",
    Percentage: "CGPA-7.47%",
    locationIcon: Location, 
    location: "Nagpur",

  },
  {
    filed: "12TH",
    nameOfCollege: "Saraswat Junior College of Science & Commerce",
    Percentage:"72.31%",
    locationIcon: Location,
    location: "Saoner",
  },
];


function Educationcard(){
  return(
    <>
     <div>
      <p>{nameOfCollege}</p>
      <p>{filed}</p>
      <p>{Percentage}</p>
      <div>
        <span> <img src={locationIcon}/>{location}</span>
      </div>
      

     </div>

    </>
  )
}


export function Education(){
  return (
    <>
    <Heading heading="My Journey" />
    <div>
      {EDUCATION.map((card,i)=>{
        return (
         <Educationcard  key={i}
          filed={card.filed}
          nameOfCollege={card.nameOfCollege}
          Percentage={card.Percentage}
          locationIcon={card.locationIcon}
          location={card.location}
        />)
        })
      } 

    </div>
    
    
    </>
  )
}

export default Education
