import { useEffect, useState } from "react";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackCard from "./components/StackCard";
import Footer from "./components/Footer";

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech) => {
    const exists = stack.find(
      (item) => item.id === tech.id
    );

    if (exists) {
      toast.warning("Technology already added!");
      return;
    }

    setStack([...stack, tech]);
    toast.success(`✅ ${tech.name} added to your stack`);
  };

  const handleRemove = (id) => {
    const removedTech = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    if (removedTech) {
      toast.error(`❌ ${removedTech.name} removed`);
    }
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.info("🗑️ All technologies removed");
  };

  if (loading) {
    return (
      <div className="loading">
        Loading Technologies...
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Hero />

      <section className="tech-section">
        <div className="section-title">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Pick one technology per category
            to build your ideal stack.
          </p>
        </div>

        <div className="tech-grid">
          <div className="cards-grid">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                stack={stack}
                handleAddToStack={handleAddToStack}
              />
            ))}
          </div>

          <StackCard
            stack={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </section>
hello fddegit
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
}

export default App;