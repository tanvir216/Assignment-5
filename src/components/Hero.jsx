import hero from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Build Your Ideal
          <br />
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack
          that fits your next project.
        </p>

        <div className="hero-actions">
          <button className="explore-btn">
            Explore Technologies
          </button>

          <button className="learn-btn">
            Learn More
          </button>
        </div>
      </div>

      <div className="hero-right">
        <img
          src={hero}
          alt="Development Stack Illustration"
        />
      </div>
    </section>
  );
}

export default Hero;