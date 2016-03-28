import React from 'react';
import {connect} from 'react-redux';
import {Tabs, Tab} from 'react-bootstrap';
import Main from './app/Main.jsx';

export default () => {
    return (
  <Tabs defaultActiveKey={1}>
    <Tab  eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
  </Tabs>
);
}