import "../Style/Achievements.css";

const Achievements = () => {
  return (
    <div id="achievements">
      <h1>What we have achieved so far</h1>
      <p>
        Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum
        consequatur illo
      </p>
      <div className="achievement-counter">
        <div className="counter">
          <h1>232</h1>
          <p>Clients</p>
        </div>
        <div className="counter">
          <h1>521</h1>
          <p>Projects</p>
        </div>
        <div className="counter">
          <h1>1463</h1>
          <p>Hours Of Support</p>
        </div>
        <div className="counter">
          <h1>15</h1>
          <p>Hard Workers</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
