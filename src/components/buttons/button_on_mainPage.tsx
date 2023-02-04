/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from 'react';
import './button_style_mainPage.css';

interface Props {
  background: string;
  color: string;
  children: React.ReactNode;
  height: string;
  onClick: () => void;
  width: string;
  // eslint-disable-next-line react/no-unused-prop-types
  font_weight: string;
  font_size: string;
}

const Button: React.FC<Props> = ({
  color,
  background,
  children,
  height,
  onClick,
  width,
  font_weight,
  font_size,
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: background,
        height,
        width,
        // eslint-disable-next-line object-shorthand
        color: color,
        fontWeight: font_weight,
        fontSize: font_size,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
