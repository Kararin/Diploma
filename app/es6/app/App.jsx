import React from 'react';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';
import AddTeacher from './app/Teachers/AddTeacherContainer';
import List from './app/Teachers/List';
import Table from './app/Teachers/Table';
import {connect} from 'react-redux';
import {gotoPage} from './actions/currentPage';


let App = ({
    currentPage,
    handleChange
}) => {
    console.log(`currenr page is ${currentPage}`);
    return (
        <Tabs>
            <Tab label = 'Teachers'>
                <Table/>
            </Tab>
            <Tab label = 'Schedule'>
            </Tab>
        </Tabs>
    );
}

const mapStateToProps = (state) => {
    return {
        currentPage: state.currentPage
    };
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleChange: (value) => {
            dispatch(gotoPage(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);