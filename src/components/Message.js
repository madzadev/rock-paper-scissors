import "./Message.css";

export const Message = ({ userSelection, message }) => {
  return (
    <div className="message-box">
      {userSelection === "" ? <h1>VS</h1> : <h2>{message}</h2>}
    </div>
  );
};
