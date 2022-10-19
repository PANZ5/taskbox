import PropTypes from "prop-types";

const Button = (props) => {
  let scale = 0.0;
  if (props.size === "sm") scale = 1.0;
  else if (props.size === "md") scale = 2.0;
  else scale = 3.0;

  const style = {
    color: props.color,
    backgroundColor: props.backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  };

  return (
    <button onClick={props.handleClick} style={style}>
      {props.textContent}
    </button>
  );
};

Button.propTypes = {
  textContent: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  handleClick: PropTypes.func,
};

export default Button;
