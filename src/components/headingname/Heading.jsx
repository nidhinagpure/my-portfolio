
import './../../components/headingname/Heading.css';
import Underline from '../../assets/Underline.svg';

const Heading = (props) => {
   const {image, heading} = props;
  return (
    <div>
        <div className='heading-container'>
          <h1>About Me</h1>
        </div>
       <div className='heading-line'></div>
    </div>
  )
}

export default Heading
