import React from 'react';
import Table from './containers/Table';
import Page from '../../core/components/Page';

const PositionsPage  = () => (
    <div className = "options-nestedpage">
        <Page
            title = "Days"
        >
            <Table/>
        </Page>
    </div>
);

export default PositionsPage;