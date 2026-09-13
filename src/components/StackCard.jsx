function StackCard({
  stack,
  handleRemove,
  handleRemoveAll,
}) {
  return (
    <div className="stack-card">
      <h3>Your Stack</h3>

      <p className="stack-subtitle">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="empty-stack">
          No technologies selected yet.
        </p>
      ) : (
        <>
          {stack.map((item) => (
            <div
              key={item.id}
              className="stack-item"
            >
              <div className="stack-info">
                <img
                  src={item.icon}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <small>
                    {item.category}
                  </small>
                </div>
              </div>

              <button
                className="remove-btn"
                onClick={() =>
                  handleRemove(item.id)
                }
              >
                ✕
              </button>
            </div>
          ))}

          <button
            className="remove-all"
            onClick={handleRemoveAll}
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
}

export default StackCard;