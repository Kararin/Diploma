import React from 'react';

const Button = ({
    width,
    children,
    onClick
}) => (
    <button className = 'mdl-button mdl-js-button mdl-button--raised'
        style = {{
            width: width
        }}
        onClick = {onClick}>
      {children}
    </button>
);

Button.defaultProps = {
    width: '50px'
};

export default Button;