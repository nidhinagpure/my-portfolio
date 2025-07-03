import './../navbar/Navbar.css';

 
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <ul>
            <span>Home</span>
            <span>About</span>
            <span>Skills</span>
            <span>Services</span>
            <span>Project</span>
            <span>Education</span>
        </ul>
         <div className='btn-action'>
                  <button className='talk-btn'>Let's Talk</button>
         </div>
    </div>
  )
}

export default Navbar;
