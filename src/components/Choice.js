import "./Choice.css";

export const Choice = ({ value, choiceIcon, onClick }) => {
  return (
    <div value={value} onClick={onClick}>
      <img
        className="user-selection-img"
        src={choiceIcon}
        alt={`${choiceIcon.toLowerCase()}-icon`}
      />
    </div>
  );
};
