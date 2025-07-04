import './../../components/footer/Footer.css';


const Footer = () => {
  return (
    <div>
        <footer class="footer">
  <div class="footer-top">
    <div class="footer-left">
      <h1 class="logo">Nid<span class="x-dot">hi</span><span class="dot">.</span></h1>
      <p>
        Looking to apply my skills in a real-world<br/>
         job environment Focused on learning, growing.
      </p>
    </div>

    <div class="footer-subscribe">
      <div class="input-box">
        <span class="icon">👤</span>
        <input type="email" placeholder="Enter your email" />
      </div>
      <button class="subscribe-btn">Subscribe</button>
    </div>
  </div>

  <hr class="footer-line" />

  <div class="footer-bottom">
    <p>© 2025 Nidhi Nagpure. All rights reserved.</p>
    <div class="footer-links">
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
