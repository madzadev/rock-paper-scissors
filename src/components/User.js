import { settings } from "../configs/game";
import "./User.css";

export const User = ({ userScore, userSelection, trophyIcon, children }) => {
  return (
    <div className="user">
      <h1>{settings.userName}</h1>
      {userScore < settings.winTarget ? (
        <>
          <div className="user-selection">{children}</div>
          <h3>
            {userSelection === ""
              ? "Pick one!"
              : `Your choice: ${userSelection}`}
          </h3>
        </>
      ) : (
        <>
          <img className="victory" src={trophyIcon} alt="img" />
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};
