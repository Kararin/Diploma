import React from 'react';
import Table from './containers/Table';
import Page from '../../core/components/Page.jsx';

class PositionsPage extends React.Component {
    render() {
        return (
            <div>
                <Page
                    title = 'Teachers positions'>
                    <Table/>
                </Page>
            </div>
        );
    }
}

export default PositionsPage;