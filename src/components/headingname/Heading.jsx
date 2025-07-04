
import './../../components/headingname/Heading.css';

const Heading = (props) => {
   const { heading } = props;
  return (
    <div>
        <div className='heading-container'>
          <h1>{heading}</h1>
        </div>
       <div className='heading-line'></div>
    </div>
  )
}

export default Heading;
