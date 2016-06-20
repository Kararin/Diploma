import Positions from '../../teacherPositions/containers/Page';
import Days from '../../days/containers/PageContainer';
import React from 'react';
import Page from '../../core/components/Page';
import TR from '../../translate/translate';

export default ({
    lang
}) => (
    <div className = "options-page">
        <Page
            title = {TR(lang, 'OPTIONS')}
           >
            <Positions/>
            <Days/>
        </Page>
    </div>
);
