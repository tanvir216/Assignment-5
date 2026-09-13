function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <div className="logo">
            <div className="logo-box">DS</div>

            <h2>
              Dev <span>Stack</span>
            </h2>
          </div>

          <p>
            Curated tools, technologies and
            resources for developers building
            modern software.
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
            <li>Terms Of Service</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Dev Stack. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;