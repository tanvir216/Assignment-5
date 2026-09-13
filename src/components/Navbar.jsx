import logo from "../assets/logo-text.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="hamburger">
        ☰
      </div>

      <div className="logo">
        <img
          src={logo}
          alt="Dev Stack Logo"
          className="logo-image"
        />

      
      </div>


      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-buttons">
        <button className="sign-in">
          Sign In
        </button>

        <button className="sign-up">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;