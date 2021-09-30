import "./Button.css";

export const Button = ({ name, img, onClick }) => {
  return (
    <div value={name} onClick={onClick}>
      <img className="user-selection-img" src={img} alt="img" />
    </div>
  );
};
