import React from 'react';
import Table from './containers/Table';
import Page from '../../core/components/Page';
import AddNew from './containers/AddNew';

const TeachersPage  = ({
    onAddAction
}) => (
    <div>
        <Page
            title = "Teachers"
            isAdd = {true}
            onAdd = {onAddAction}
        >
            <Table/>
            <AddNew/>
        </Page>
    </div>
);

TeachersPage.defaultProps = {
    onAddAction: console.log('onAddAction not implemented')
};

TeachersPage.propTypes = {
   onAddAction: React.PropTypes.func
};

export default TeachersPage;