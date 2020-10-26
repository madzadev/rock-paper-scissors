import React, { useState } from "react";
import "./styles.css";

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";

import trophy from "./assets/trophy.png";

const Button = (props) => {
  return (
    <div value={props.name} onClick={props.onClick}>
      <img className="user-selection-img" src={props.img} alt="img" />
    </div>
  );
};

export default function App() {
  const [game, setGame] = useState({
    name: "Player 1",
    gameStarted: false,
    userSelection: "",
    pcSelection: "",
    round: 0,
    userScore: 0,
    pcScore: 0,
    message: "",
  });

  const reset = () => {
    setGame({
      ...game,
      round: 0,
      userSelection: "",
      pcSelection: "",
      userScore: 0,
      pcScore: 0,
      message: "",
    });
  };

  const playGame = (e) => {
    const user = e.target.parentNode.getAttribute("value");
    const pc = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];

    if (user === pc) {
      setGame({
        ...game,
        message: (game.message = "It's a tie!"),
      });
    } else if (
      (user === "Rock" && pc === "Scissors") ||
      (user === "Paper" && pc === "Rock") ||
      (user === "Scissors" && pc === "Paper")
    ) {
      setGame({
        ...game,
        userScore: (game.userScore += 1),
        message: (game.message = "You won!"),
      });
    } else {
      setGame({
        ...game,
        pcScore: (game.pcScore += 1),
        message: (game.message = "You lost!"),
      });
    }

    setGame({
      ...game,
      round: (game.round += 1),
      userSelection: user,
      pcSelection: pc,
    });
  };

  return (
    <div className="App">
      <h1>Rock, paper, scissors!</h1>
      <h1 className="rounds">
        {game.userSelection === "" ? "No rounds yet!" : `Round: ${game.round}`}
      </h1>

      <div className="play-box">
        <div className="box user-box">
          <h1>{game.name}</h1>
          {game.userScore < 10 ? (
            <>
              <div className="user-selection">
                <Button
                  name="Rock"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={rock}
                />
                <Button
                  name="Paper"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={paper}
                />
                <Button
                  name="Scissors"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={scissors}
                />
              </div>
              <h3>
                {game.userSelection === ""
                  ? "Pick one!"
                  : `Your choice: ${game.userSelection}`}
              </h3>
            </>
          ) : (
            <>
              <img src={trophy} alt="img" />
              <h3>Victory!</h3>
            </>
          )}
        </div>
        <div className="message-box">
          {game.userSelection === "" ? (
            <h1>VS</h1>
          ) : (
            <>
              <h3 className="message">{game.message}</h3>
            </>
          )}
        </div>

        <div className="box pc-box">
          <h1>Computer</h1>
          {game.pcScore < 10 ? (
            game.userSelection === "" ? (
              <h3>Waiting for your selection!</h3>
            ) : (
              <>
                <img
                  className="pc-selection-img"
                  src={
                    game.pcSelection === "Rock"
                      ? rock
                      : game.pcSelection === "Paper"
                      ? paper
                      : scissors
                  }
                  alt="img"
                />
                <h3>PC selected: {game.pcSelection}</h3>
              </>
            )
          ) : (
            <>
              <img src={trophy} alt="img" />
              <h3>Victory!</h3>
            </>
          )}
        </div>
      </div>
      <div className="score-box">
        <h1>{game.userScore}</h1>
        <div />
        <h1>{game.pcScore}</h1>
      </div>
      {game.userSelection !== "" &&
        <div onClick={reset} className="reset-btn">
          <h3>
            {game.userScore === 10 || game.pcScore === 10
              ? "Play again"
              : "Reset"}
          </h3>
        </div>
      }
    </div>
  );
}
