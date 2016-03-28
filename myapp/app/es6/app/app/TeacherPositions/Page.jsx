import React from 'react';
import Table from './containers/Table';
import {Panel} from 'react-bootstrap';

class PositionsPage extends React.Component {
    render() {
        return (
            <div>
                <Panel
                    header = 'Teachers positions'
                    bsStyle = 'primary'>
                    <Table/>
                </Panel>
            </div>
        );
    }
}

export default PositionsPage;