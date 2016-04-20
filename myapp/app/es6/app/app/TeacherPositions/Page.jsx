import React from 'react';
import Table from './containers/Table';
import Page from '../../core/components/Page';
import AddNew from './containers/AddNew';

const PositionsPage  = ({
    onAddAction
}) => (
    <div className = "options-nestedpage">
        <Page
            title = "Teachers positions"
            isAdd = {true}
            onAdd = {onAddAction}
        >
            <Table/>
            <AddNew/>
        </Page>
    </div>
);

PositionsPage.defaultProps = {
    onAddAction: console.log('onAddAction not implemented')
};

PositionsPage.propTypes = {
   onAddAction: React.PropTypes.func
};

export default PositionsPage;