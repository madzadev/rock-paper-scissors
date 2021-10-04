import "./Message.css";

export const Message = ({ userSelection, message }) => {
  return (
    <div className="message-box">
      {userSelection === "" ? (
        <h1>VS</h1>
      ) : (
        <h3 className="message">{message}</h3>
      )}
    </div>
  );
};
