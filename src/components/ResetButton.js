import "./ResetButton.css";

export const ResetButton = ({ onClick, userSelection, userScore, pcScore }) => {
  return (
    userSelection !== "" && (
      <div onClick={onClick} className="reset-btn">
        <h3>{userScore === 10 || pcScore === 10 ? "Play again" : "Reset"}</h3>
      </div>
    )
  );
};
