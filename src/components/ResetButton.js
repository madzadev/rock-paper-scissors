import "./ResetButton.css";

export const ResetButton = ({ onClick, game }) => {
  return (
    <div onClick={onClick} className="reset-btn">
      <h3>
        {game.userScore === 10 || game.pcScore === 10 ? "Play again" : "Reset"}
      </h3>
    </div>
  );
};
