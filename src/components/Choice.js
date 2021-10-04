import "./Choice.css";

export const Choice = ({ value, img, onClick }) => {
  return (
    <div value={value} onClick={onClick}>
      <img className="user-selection-img" src={img} alt="img" />
    </div>
  );
};
