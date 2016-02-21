import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {connect} from 'react-redux';
import TeacherPage from 'teacher/Page';
import {gotoPage} from './actions/currentPage';


let App = ({
    currentPage,
    handleChange
}) => {
    console.log(`currenr page is ${currentPage}`);
    return (
      <div>
        <TeacherPage/>
      </div>
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
