import React from 'react';

const Tab = ({
    title,
    children,
    isActive,
    id
}) => (
    <section className="mdl-layout__tab-panel is-active" id={title}>
        <div className="page-content">
            {children}
        </div>
    </section>
);

Tab.defaultProps = {
    id: Tab.id++
};

export default Tab;

//TODO: default Props