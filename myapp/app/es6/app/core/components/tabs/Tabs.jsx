import React from 'react';
import Tab from 'components/Tab';

//TODO: make my own css
export default ({
    children
}) => (
<div className="mdl-layout mdl-layout--fixed-header">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <ul className = 'ker-menu-ul'>
          {children}
        </ul>
      </div>
    </header>
  </div>
);