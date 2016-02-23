import React from 'react';
import {connect} from 'react-redux';
import {gotoPage} from './actions/currentPage';
import Tabs from 'components/Tabs';
import Tab from 'components/Tab';
import Main from 'components/Main';

let App = ({
    currentPage,
    handleChange
}) => {
    console.log(`currenr page is ${currentPage}`);
    return (
        <div>
            <Tabs>
                <Tab key = '1' onClickHandler = {handleChange.bind(this,'teachers')}>Teachers</Tab>
                <Tab key = '2' onClickHandler = {handleChange.bind(this, 'teachersPositions')}>Positions</Tab>
            </Tabs>
            <div>
                <Main pageName = {currentPage}/>
            </div>
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
