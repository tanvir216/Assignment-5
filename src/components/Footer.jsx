import logo from "../assets/logo-text.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="logo">
            <img
              src={logo}
              alt="Dev Stack"
              className="logo-image"
            />
          </div>

          <p>
            Curated tools, technologies, and resources
            for developers building modern software.
          </p>

      <div className="socials">
  <span>GitHub</span>
  <span>Twitter</span>
  <span>LinkedIn</span>
</div>
        </div>

        <div>
          <h4>PRODUCT</h4>
          <ul>
            <li>Home</li>
            <li>Technologies</li>
            <li>Projects</li>
          </ul>
        </div>

        <div>
          <h4>COMPANY</h4>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h4>LEGAL</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="footer-links">
          <span>Privacy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;