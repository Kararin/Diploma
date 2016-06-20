import React from 'react';
import Table from '../containers/Table';
import Page from '../../core/components/Page';
import AddNew from '../containers/AddNew';
import TR from '../../translate/translate';

const TeachersPage  = ({
    onAddAction,
    lang
}) => (
    <div>
        <Page
            title = {TR(lang, 'TEACHERS')}
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