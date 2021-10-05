import "./Choice.css";

export const Choice = ({ value, choiceIcon, onClick }) => {
  return (
    <div value={value} onClick={onClick}>
      <img className="user-selection-icon" src={choiceIcon} alt="icon" />
    </div>
  );
};
