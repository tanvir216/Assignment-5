function TechCard({ tech, stack, handleAddToStack }) {
  const added = stack.some(
    (item) => item.id === tech.id
  );

  return (
    <div className="tech-card">
      <div className="card-header">
        <div className="tech-icon">
          <img
            src={tech.icon}
            alt={tech.name}
          />
        </div>

        <span className="badge">
          {tech.badge}
        </span>
      </div>

      <h3>{tech.name}</h3>

      <p>{tech.description}</p>

      <div className="card-meta">
        <span>{tech.category}</span>
        <span>{tech.difficulty}</span>
        <span>⭐ {tech.rating}</span>
      </div>

      <button
        disabled={added}
        onClick={() => handleAddToStack(tech)}
        className={added ? "added-btn" : ""}
      >
        {added ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechCard;