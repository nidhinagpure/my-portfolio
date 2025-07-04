import { useState } from 'react';
import './../navbar/Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

 
const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div className='navbar-container'>
        <ul>
            <AnchorLink className='anchor-link' offset={50} href='#home'><span onClick={() =>setMenu("home")}>Home</span></AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#about'><span onClick={() =>setMenu("about")}>About</span></AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#skill'><span onClick={() =>setMenu("skill")}>Skills</span></AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#service'><span onClick={() =>setMenu("service")}>Services</span></AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#project'><span onClick={() =>setMenu("project")}>Project</span></AnchorLink>
            <AnchorLink className='anchor-link' offset={50} href='#education'><span onClick={() =>setMenu("education")}>Education</span></AnchorLink>
        </ul>
         <div className='btn-action'>
                <AnchorLink className='anchor-link' 
                offset={50} href='#contact'>
                <button  onClick={() =>setMenu("contact")}
                 className='talk-btn'>Let's Talk</button>
                 </AnchorLink>
         </div>
    </div>
  )
}

export default Navbar;
