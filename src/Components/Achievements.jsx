import "../Style/Achievements.css";

const Achievements = () => {
  return (
    <div id="achievements">
      <h1>What we have achieved so far</h1>
      <p>Our company represented with numbers</p>
      <div className="achievement-counter">
        <div className="counter">
          <h1>0</h1>
          <p>Clients</p>
        </div>
        <div className="counter">
          <h1>4</h1>
          <p>Projects</p>
        </div>
        <div className="counter">
          <h1>120</h1>
          <p>Player</p>
        </div>
        <div className="counter">
          <h1>4</h1>
          <p>Hard Workers</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
