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

import rock from "./assets/rock.png";
import paper from "./assets/paper.png";
import scissors from "./assets/scissors.png";
import trophy from "./assets/trophy.png";

import { settings } from "./configs/game";
import { states } from "./configs/game";

import "./styles.css";

export default function App() {
  const [game, setGame] = useState({
    ...states,
  });

  const reset = () => {
    setGame({
      ...game,
      ...states,
    });
  };

  const play = (e) => {
    if (game.pcScore < settings.winTarget) {
      const userSelection = e.target.parentNode.getAttribute("value");
      const pcSelection = ["Rock", "Paper", "Scissors"][
        Math.floor(Math.random() * 3)
      ];

      userSelection === pcSelection
        ? setGame({
            ...game,
            message: (game.message = "It's a tie!"),
          })
        : (userSelection === "Rock" && pcSelection === "Scissors") ||
          (userSelection === "Paper" && pcSelection === "Rock") ||
          (userSelection === "Scissors" && pcSelection === "Paper")
        ? setGame({
            ...game,
            userScore: (game.userScore += 1),
            message: (game.message = "You won!"),
          })
        : setGame({
            ...game,
            pcScore: (game.pcScore += 1),
            message: (game.message = "You lost!"),
          });

      setGame({
        ...game,
        round: (game.round += 1),
        userSelection: userSelection,
        pcSelection: pcSelection,
      });
    }
  };

  return (
    <div className="App">
      <Title name="Rock, paper, scissors!" />
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
          <Score score={game.userScore} />
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
          <Score score={game.pcScore} />
        </Box>
      </PlayBox>
      <ResetButton {...game} onClick={reset} />
    </div>
  );
}
