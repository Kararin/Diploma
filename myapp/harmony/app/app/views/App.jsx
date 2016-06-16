import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import Teachers from '../../teachers/containers/Page';
import Options from '../../options/views/Page';
import {Link} from 'react-router';
import {appStyle} from '../../../css/style.scss';
import Schedule from '../../schedule/containers/Page';
import UserView from '../../user/containers/UserViewContainer';
import TR from '../../translate/translate';

export default  class App extends React.Component {
    render () {
        var {lang} = this.props;

        return (
            <div>
                <Tabs className = "my-tabs"
                    defaultActiveKey = {2}
                    bsStyle = 'tabs'>
                    {this.getTeacherTab()}
                    <Tab className = "my-tab"
                        eventKey = {2}
                        title = {TR(lang, 'SCHEDULE')}>
                        <Schedule/>
                    </Tab>
                    {this.getOptionsTab()}
                    {this.getUsersTab()}
                    <Tab className = "my-tab"
                        eventKey = {5}
                        title = {TR(lang, 'CURRENT_USER')}>
                        <UserView/>
                    </Tab>
                </Tabs>
            </div>
        );
    }

    getTeacherTab() {
        var {
            showTeachers,
            lang
        } = this.props;

        return showTeachers ? (
            <Tab className = "my-tab"
                eventKey = {1}
                title = {TR(lang, 'TEACHERS')}>
                <Teachers/>
            </Tab>): null;
    }

    getOptionsTab() {
        var {
            showOptions,
            lang
        } = this.props;

        return showOptions ? (
            <Tab
                className = "my-tab"
                eventKey = {3}
                title = {TR(lang, 'OPTIONS')}>
                <Options/>
            </Tab>
        ): null;
    }

    getUsersTab() {
        var {
            lang,
            showUsers
        } = this.props;

        return showUsers ? (
            <Tab
                className = "my-tab"
                eventKey = {4}
                title = {TR(lang, 'USERS')}>
            </Tab>
        ) : null;
    }

}

