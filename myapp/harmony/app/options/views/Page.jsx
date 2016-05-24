import Positions from '../../teacherPositions/containers/Page';
import Days from '../../days/views/Page';
import React from 'react';
import Page from '../../core/components/Page';

export default () => (
    <div className = "options-page">
        <Page
            title = "Options"
           >
            <Positions/>
            <Days/>
        </Page>
    </div>
);
