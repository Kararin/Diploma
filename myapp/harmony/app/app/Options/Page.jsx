import Positions from '../TeacherPositions/containers/Page';
import Days from '../Days/Page';
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
