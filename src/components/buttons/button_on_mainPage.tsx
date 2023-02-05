/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import React from 'react';

interface Props {
  background?: string;
  children: React.ReactNode;
  height?: string;
  width?: string;
  onClick: () => void;
  disabled?: boolean;
}

// eslint-disable-next-line import/prefer-default-export
export const Button: React.FC<Props> = ({
  background,
  children,
  height,
  width,
  onClick,
  disabled,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    style={{
      backgroundColor: background,
      height,
      width,
    }}
  >
    {children}
  </button>
);

Button.defaultProps = {
  background: '#241005ef',
  height: '2.3rem',
  width: '13rem',
};
