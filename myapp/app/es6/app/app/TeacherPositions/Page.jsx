import React from 'react';
import Table from 'teacherPositions/container/Table';
import AddNew from "teacherPositions/container/AddNew";
import Page from 'components/Page';

class PositionsPage extends React.Component {
    render() {
        return (
            <Page
                className = 'ker-teacher-positions-page'
                title = 'Teachers positions'
                display = {this.props.display}>
                <Table/>
                <AddNew/>
            </Page>
        );

    }
}

export default PositionsPage;

//TODO: add style for menu