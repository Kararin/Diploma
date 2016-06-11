import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Teachers from '../../teachers/containers/Page';
import Options from '../../options/views/Page';
import {Link} from 'react-router';
import {appStyle} from '../../../css/style.scss';
import Schedule from '../../schedule/containers/Page';
import LanguageButtons from '../../translate/containers/LanguageButtonsContainer';

export default  class App extends React.Component {
    render () {
        return (
            <div>
                <LanguageButtons/>
                <Tabs className = "my-tabs"
                    defaultActiveKey = {2}
                    bsStyle = 'tabs'>
                    {this.getTeacherTab()}
                    <Tab className = "my-tab"
                        eventKey = {2}
                        title = "Schedule">
                        <Schedule/>
                    </Tab>
                    {this.getOptionsTab()}
                    {this.getUsersTab()}
                </Tabs>
            </div>
        );
    }

    getTeacherTab() {
        return this.props.showTeachers ? (
            <Tab className = "my-tab"
                eventKey = {1}
                title="Teachers">
                <Teachers/>
            </Tab>): null;
    }

    getOptionsTab() {
        return this.props.showOptions ? (
            <Tab className = "my-tab" eventKey = {3} title="Options">
                <Options/>
            </Tab>
        ): null;
    }

    getUsersTab() {
        return this.props.showUsers ? (
            <Tab className = "my-tab" eventKey = {4} title="Users">
            </Tab>
        ) : null;
    }

}({
    showOptions,
    showTeachers,
    shpwUsers
}) => {
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
            <Tab className = "my-tab" eventKey = {4} title="Users">
            </Tab>
        </Tabs>
    );
}

