import { settings } from "../configs/game";
import "./Computer.css";

export const Computer = ({
  pcScore,
  userSelection,
  pcSelection,
  rockIcon,
  paperIcon,
  scissorsIcon,
  trophyIcon,
}) => {
  return (
    <div className="user">
      <h1>Computer</h1>
      {pcScore < settings.winTarget ? (
        userSelection === "" ? (
          <h3 className="waiting">{settings.waitingMessage}</h3>
        ) : (
          <>
            <img
              className="pc-selection-img"
              src={
                pcSelection === "Rock"
                  ? rockIcon
                  : pcSelection === "Paper"
                  ? paperIcon
                  : scissorsIcon
              }
              alt="pc-selection"
            />
            <h3>PC selected: {pcSelection}</h3>
          </>
        )
      ) : (
        <>
          <img className="pc-selection-img" src={trophyIcon} alt="img" />
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};
