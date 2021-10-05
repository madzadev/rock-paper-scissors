import React, { useState } from "react";

import { Title } from "./components/Title";
import { Round } from "./components/Round";
import { PlayBox } from "./components/PlayBox";
import { Box } from "./components/Box";
import { User } from "./components/User";
import { Choice } from "./components/Choice";
import { Computer } from "./components/Computer";
import { Score } from "./components/Score";
import { Message } from "./components/Message";
import { ResetButton } from "./components/ResetButton";

import { settings } from "./configs/game";

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";

import "./styles.css";

export default function App() {
  let [game, setGame] = useState({
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

  const { winMessage, tieMessage, lostMessage, winTarget } = settings;
  const { userScore, pcScore } = game;

  const play = (e) => {
    if (pcScore < winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const pcSelection = ["Rock", "Paper", "Scissors"][
        Math.floor(Math.random() * 3)
      ];

      userSelection === pcSelection
        ? setGame({
            ...game,
            message: tieMessage,
          })
        : (userSelection === "Rock" && pcSelection === "Scissors") ||
          (userSelection === "Paper" && pcSelection === "Rock") ||
          (userSelection === "Scissors" && pcSelection === "Paper")
        ? setGame({
            ...game,
            ...(game.userScore += 1),
            ...(game.message = winMessage),
          })
        : setGame({
            ...(game.pcScore += 1),
            ...(game.message = lostMessage),
          });

      setGame({
        ...game,
        round: (game.round += 1),
        userSelection,
        pcSelection,
      });
    }
  };

  return (
    <div className="App">
      <Title />
      <Round {...game} />
      <PlayBox>
        <Box>
          <User {...game} trophyIcon={trophy}>
            <Choice {...game} value="Rock" onClick={play} choiceIcon={rock} />
            <Choice {...game} value="Paper" onClick={play} choiceIcon={paper} />
            <Choice
              {...game}
              value="Scissors"
              onClick={play}
              choiceIcon={scissors}
            />
          </User>
          <Score score={userScore} />
        </Box>
        <Message {...game} />
        <Box>
          <Computer
            {...game}
            rockIcon={rock}
            paperIcon={paper}
            scissorsIcon={scissors}
            trophyIcon={trophy}
          />
          <Score score={pcScore} />
        </Box>
      </PlayBox>
      <ResetButton {...game} onClick={reset} />
    </div>
  );
}
