import React from 'react';

const MiniFabButton = ({
    icon,
    onClick
}) => (
    <button onClick = {onClick} className = "mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab">
        <i className = "material-icons">{icon}</i>
    </button>
);

MiniFabButton.defaultProps = {
    icon: 'add'
};

export default MiniFabButton;

//TODO: add possibility to change size