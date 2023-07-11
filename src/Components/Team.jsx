import "../Style/Team.css";

const Team = () => {
  return (
    <div id="team">
      <h1 style={{ fontFamily: "var(--title-font-family)" }}>TEAM</h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="team-members">
        <div className="team-member">
          <div className="member-img">
            <img
              src="https://ttwo.dk/wp-content/uploads/2017/08/person-placeholder.jpg"
              alt=""
            />
          </div>
          <div className="member-text">
            <h2>Fatima El Zohra Yakhlef</h2>
            <p>Game Developer</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">
            <img
              src="https://ttwo.dk/wp-content/uploads/2017/08/person-placeholder.jpg"
              alt=""
            />
          </div>
          <div className="member-text">
            <h2>Imene Djemadi</h2>
            <p>Game Developer</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">
            <img
              src="https://ttwo.dk/wp-content/uploads/2017/08/person-placeholder.jpg"
              alt=""
            />
          </div>
          <div className="member-text">
            <h2>Rehamnia Walid</h2>
            <p>Game Developer</p>
          </div>
        </div>
        <div className="team-member">
          <div className="member-img">
            <img
              src="https://ttwo.dk/wp-content/uploads/2017/08/person-placeholder.jpg"
              alt=""
            />
          </div>
          <div className="member-text">
            <h2>Chelghoum Walid</h2>
            <p>Game Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
