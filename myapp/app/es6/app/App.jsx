import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Positions from './app/TeacherPositions/containers/Page';
import Teachers from './app/Teachers/containers/Page';
import {Link} from 'react-router';
import {appStyle} from '../css/style.scss';

export default ({defaultKey}) => {
    return (
        <Tabs className = "my-tabs"
             defaultActiveKey = {1}
             bsStyle = 'tabs'>
            <Tab className = "my-tab"
                eventKey = {1}
                title="Teachers">
                <Teachers/>
            </Tab>
            <Tab className = "my-tab" eventKey = {2} title="Positions">
                <Positions/>
            </Tab>
        </Tabs>
    );
}

