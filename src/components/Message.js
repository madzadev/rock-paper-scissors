import "./Message.css";

export const Message = ({ message }) => {
  return (
    <div className="message-box">
      <h1>{message}</h1>
      {/* {game.userSelection === "" ? (
         <h1>VS</h1>
       ) : (
         <>
           <h3 className="message">{game.message}</h3>
         </>
       )} */}
    </div>
  );
};
