import Underline from '../../assets/Underline.svg';

const Heading = (props) => {
   const {image, heading} = props;
  return (
    <div>
        <div>
          <h1>About</h1>
          <img src={Underline} />
        </div>
      
    </div>
  )
}

export default Heading
