import React from 'react';
import Tab from 'components/Tab';

export default ({
    children
}) => (
<div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">
          Teachers
        </button>
      </div>
    </header>
    <main className="mdl-layout__content">
      <div className="page-content">
        {children}
      </div>
    </main>
  </div>
);