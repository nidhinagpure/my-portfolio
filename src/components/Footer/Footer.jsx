import './Footer.css';


const Footer = () => {
  return (
    <div>
        <footer className="footer">
  <div className="footer-top">
    <div className="footer-left">
      <h1 className="logo">Nid<span className="x-dot">hi</span><span className="dot">.</span></h1>
      <p>
        Looking to apply my skills in a real-world<br/>
         job environment Focused on learning, growing.
      </p>
    </div>

    <div className="footer-subscribe">
      <div className="input-box">
        <span className="icon">👤</span>
        <input type="email" placeholder="Enter your email" />
      </div>
      <button className="subscribe-btn">Subscribe</button>
    </div>
  </div>

  <hr className="footer-line" />

  <div className="footer-bottom">
    <p>© 2025 Nidhi Nagpure. All rights reserved.</p>
    <div className="footer-links">
      <a href="#">Term of Services</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Connect with me</a>
    </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
