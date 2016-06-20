import React from 'react';
import Table from '../containers/Table';
import Page from '../../core/components/Page';
import TR from '../../translate/translate';

const PositionsPage  = ({lang}) => (
    <div className = "options-nestedpage">
        <Page
            title = {TR(lang, 'DAYS_NAME')}
        >
            <Table/>
        </Page>
    </div>
);

export default PositionsPage;