import { Link } from "react-router-dom";
import "../Style/Team.css";

const Team = () => {
  return (
    <div id="team">
      <h1 style={{ fontFamily: "var(--title-font-family)" }}>TEAM</h1>
      <p>
        Meet The Team! our team consists of four dedicated developers who are
        passionate about creating games with AI technology.
      </p>
      <div className="team-members">
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/walid-chelghoum-2090021a0/"
          className="team-member"
        >
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
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/walid-chelghoum-2090021a0/"
          className="team-member"
        >
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
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/rehamnia-walid-97603619b/"
          className="team-member"
        >
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
        </Link>
        <Link
          target="_blank"
          to="https://www.linkedin.com/in/walid-chelghoum-2090021a0/"
          className="team-member"
        >
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
        </Link>
      </div>
    </div>
  );
};

export default Team;
