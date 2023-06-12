import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({
  buttonClassName,
  buttonName,
  type,
  disabled = false,
  onClick,
  content,
}) => {
  return (
    <button
      className={buttonClassName}
      name={buttonName}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  buttonClassName: PropTypes.string,
  buttonName: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  content: PropTypes.string,
};
