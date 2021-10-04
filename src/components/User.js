import "./User.css";

export const User = ({ name, userScore, userSelection, img, children }) => {
  return (
    <div className="user">
      <h1>{name}</h1>
      {userScore < 10 ? (
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
          <img className="victory" src={img} alt="img" />
          <h3>Victory!</h3>
        </>
      )}
    </div>
  );
};
