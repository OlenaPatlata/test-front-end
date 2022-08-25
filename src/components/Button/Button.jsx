import PropTypes from 'prop-types';
import s from './Button.module.scss';

const Button = ({
  type = 'button',
  onClick,
  disabled = true,
  name,
  text,
  style,
}) => {
  return (
    <button
      type={type}
      disabled={!disabled}
      onClick={onClick}
      className={s[name]}
      style={style}
    >
      {text}
    </button>
  );
};
Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};
export default Button;
