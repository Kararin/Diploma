import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Teachers from './teachers/containers/Page';
import Options from './options/views/Page';
import {Link} from 'react-router';
import {appStyle} from '../css/style.scss';
import Schedule from './schedule/containers/Page';

export default ({defaultKey}) => {
    return (
        <Tabs className = "my-tabs"
             defaultActiveKey = {2}
             bsStyle = 'tabs'>
            <Tab className = "my-tab"
                eventKey = {1}
                title="Teachers">
                <Teachers/>
            </Tab>
            <Tab className = "my-tab"
                eventKey = {2}
                title = "Schedule">
                <Schedule/>
            </Tab>
            <Tab className = "my-tab" eventKey = {3} title="Options">
                <Options/>
            </Tab>
        </Tabs>
    );
}

