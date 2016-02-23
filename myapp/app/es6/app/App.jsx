import React from 'react';
import {connect} from 'react-redux';
import TeacherPage from 'teacher/Page';
import {gotoPage} from './actions/currentPage';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';

let App = ({
    currentPage,
    handleChange
}) => {
    console.log(`currenr page is ${currentPage}`);
    // return (
    //   <div>
    //     <TeacherPage/>
    //   </div>
    // );
    return (
        <Tabs>
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
