import { useParams } from "react-router-dom";
import games from "../Data/gamesdata.json";
import "../Style/Game.css";

const Game = () => {
  const { cpu } = useParams();
  const game = games.find((i) => i.id === cpu);
  return (
    <div id="game">
      <div className="game-intro">
        <div className="game-img-container">
          <img src={game.image} alt="Game Thumbnail" />
        </div>
        <div className="game-intro-content">
          <h1>{game.name}</h1>
          <h2>{game.description}</h2>
          <p>Tags:</p>
          <ul id="desc">
            {game.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="game-details">
        {game.content.map((item, index) => (
          <div
            className={`game-detail ${
              index % 2 === 0 ? "image-left" : "image-right"
            }`}
          >
            <div className="game-detail-img-container">
              <img src={item[2]} alt="Game Sample" />
            </div>
            <div className="game-detail-text">
              <h2>{item[0]}</h2>
              <p>{item[1]}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
