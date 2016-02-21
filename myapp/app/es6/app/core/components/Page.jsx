import React, {PropTypes} from 'react';


const Page = ({
  title,
  children,
  buttons: {
    isAdd
  },
  actions: {
    onAdd
  }
}) => (
  <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header ker-card">
    <header className="mdl-layout__header">
      <div className="mdl-layout__header-row">
        <span className="mdl-layout-title">
          {title}
        </span>
        <div className="mdl-layout-spacer"></div>
        {
          (isAdd)?
            <button
              className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab"
              onClick = {onAdd}
            >
              <i className="material-icons">add</i>
            </button>
          : <div></div>
        }
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="page-content">
        {children}
      </div>
    </main>
  </div>
);


Page.defaultProps = {
  buttons: {
    isAdd: false
  },
  actions: {
    onAdd: () => console.log('not implemented')
  },
  title: ''
}

// TODO: proptypes
export default Page;
