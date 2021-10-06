import "./Message.css";

export const Message = ({ userSelection, message }) => {
  return (
    <div className="message-box">
     <h2>{userSelection === "" ? "VS" : message}</h2>
    </div>
  );
};
