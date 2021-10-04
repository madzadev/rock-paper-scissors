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
      {pcScore < 10 ? (
        userSelection === "" ? (
          <h3 className="waiting">Waiting for your selection!</h3>
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
              alt="img"
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
