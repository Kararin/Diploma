import React from 'react';

const Tab = ({
    children,
    onClickHandler
}) => (
    <li onClick = {(e) => {
        e.preventDefault();
        onClickHandler();
    }}>
        {children}
    </li>
);

export default Tab;

//TODO: default Props