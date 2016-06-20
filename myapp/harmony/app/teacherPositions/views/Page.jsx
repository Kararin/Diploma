import React from 'react';
import Table from '../containers/Table';
import Page from '../../core/components/Page';
import AddNew from '../containers/AddNew';
import TR from '../../translate/translate';

const PositionsPage  = ({
    onAddAction,
    lang
}) => (
    <div className = "options-nestedpage">
        <Page
            title = {TR(lang, 'TEACHER_POSITIONS')}
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