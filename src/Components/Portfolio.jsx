import "../Style/Portfolio.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (i) => {
    setToggleState(i);
  };
  return (
    <div id="portfolio">
      <h1>PORTFOLIO</h1>
      <p>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat
        sit in iste officiis commodi quidem hic quas.
      </p>
      <div className="portfolio-content">
        <div className="portfolio-navbar">
          <p
            onClick={() => toggleTab(1)}
            className={toggleState === 1 ? "active-title" : ""}
          >
            ALL
          </p>
          <p
            onClick={() => toggleTab(2)}
            className={toggleState === 2 ? "active-title" : ""}
          >
            EDUCATION
          </p>
          <p
            onClick={() => toggleTab(3)}
            className={toggleState === 3 ? "active-title" : ""}
          >
            PSYCHOLOGY
          </p>
        </div>
        {(toggleState === 1 && (
          <div className="portfolio-items">
            <div className="portfolio-items-row">
              <Link to="/game-01">
                <div className="portfolio-item">GAME 01</div>
              </Link>
              <Link to="/game-02">
                <div className="portfolio-item">GAME 02</div>
              </Link>
            </div>
            <div className="portfolio-items-row">
              <Link to="/game-03">
                <div className="portfolio-item">GAME 03</div>
              </Link>
              <Link to="/game-04">
                <div className="portfolio-item">GAME 04</div>
              </Link>
            </div>
          </div>
        )) ||
          (toggleState === 2 && (
            <div className="portfolio-items">
              <div className="portfolio-items-row">
                <Link to="/game-01">
                  <div className="portfolio-item">GAME 01</div>
                </Link>
                <Link to="/game-02">
                  <div className="portfolio-item">GAME 02</div>
                </Link>
              </div>
            </div>
          )) ||
          (toggleState === 3 && (
            <div className="portfolio-items">
              <div className="portfolio-items-row">
                <Link to="/game-03">
                  <div className="portfolio-item">GAME 03</div>
                </Link>
                <Link to="/game-04">
                  <div className="portfolio-item">GAME 04</div>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Portfolio;
