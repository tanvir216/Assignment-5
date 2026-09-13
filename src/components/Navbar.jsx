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
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#technologies">Technologies</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
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