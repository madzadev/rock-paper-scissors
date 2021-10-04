import "./Computer.css";

export const Computer = ({
  pcScore,
  userSelection,
  pcSelection,
  children,
  img,
}) => {
  return (
    <div className="user">
      <h1>Computer</h1>
      {pcScore < 10 ? (
        userSelection === "" ? (
          <h3>Waiting for your selection!</h3>
        ) : (
          <>
            <div className="pc-selection-img" />
            {children}
            <div />
            <h3>PC selected: {pcSelection}</h3>
          </>
        )
      ) : (
        <>
          <img src={img} alt="img" />
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};
