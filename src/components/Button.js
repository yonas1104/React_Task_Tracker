import PropTypes from "prop-types";
const Button = ({ title, color, onclick }) => {
  return (
    <button
      onClick={onclick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};

Button.propTypes = {
  onclick: PropTypes.func,
  title: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
