import React, { useState } from "react";

import { Title } from "./components/Title";
import { Round } from "./components/Round";
import { PlayBox } from "./components/PlayBox";
import { Box } from "./components/Box";
import { User } from "./components/User";
import { Choice } from "./components/Choice";
import { Score } from "./components/Score";
import { Message } from "./components/Message";
import { ResetButton } from "./components/ResetButton";

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";

import "./styles.css";

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
      userSelection: "",
      pcSelection: "",
      round: 0,
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
      <Title name="Rock, paper, scissors!" />
      {/* <h1>Rock, paper, scissors!</h1> */}
      <Round
        message={
          game.userSelection === "" ? "No rounds yet!" : `Round: ${game.round}`
        }
      />
      {/* <h1 className="round">
        {game.userSelection === "" ? "No rounds yet!" : `Round: ${game.round}`}
      </h1> */}
      <PlayBox>
        <Box>
          <User {...game} img={trophy}>
            <Choice
              name="Rock"
              onClick={game.pcScore < 10 ? playGame : ""}
              img={rock}
            />
            <Choice
              name="Paper"
              onClick={game.pcScore < 10 ? playGame : ""}
              img={paper}
            />
            <Choice
              name="Scissors"
              onClick={game.pcScore < 10 ? playGame : ""}
              img={scissors}
            />
          </User>
          {/* <h1>{game.name}</h1>
          {game.userScore < 10 ? (
            <>
              <div className="user-selection">
                <Choice
                  name="Rock"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={rock}
                />
                <Choice
                  name="Paper"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={paper}
                />
                <Choice
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
          )} */}
          <Score score={game.userScore} />
        </Box>
        {/* <div className="message-box">
          {game.userSelection === "" ? (
            <h1>VS</h1>
          ) : (
            <>
              <h3 className="message">{game.message}</h3>
            </>
          )}
        </div> */}
        <Message message={game.userSelection === "" ? "VS" : game.message} />
        <Box>
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
          <Score score={game.pcScore} />
        </Box>
      </PlayBox>

      {/* <div className="play-box">
        <div className="box user-box">
          <h1>{game.name}</h1>
          {game.userScore < 10 ? (
            <>
              <div className="user-selection">
                <Choice
                  name="Rock"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={rock}
                />
                <Choice
                  name="Paper"
                  onClick={game.pcScore < 10 ? playGame : ""}
                  img={paper}
                />
                <Choice
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
      </div> */}
      {game.userSelection !== "" && <ResetButton onClick={reset} game={game} />}
    </div>
  );
}
