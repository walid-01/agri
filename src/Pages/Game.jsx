import { useParams } from "react-router-dom";
import games from "../Data/gamesdata.json";
import "../Style/Game.css";

const Game = () => {
  const { cpu } = useParams();
  const game = games.find((i) => i.id === cpu);
  return (
    <div id="game">
      <div>
        <h1>Image goes here</h1>
      </div>
      <div id="game-header">
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
  );
};

export default Game;
