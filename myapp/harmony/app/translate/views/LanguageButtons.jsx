import React from 'react';
import {SplitButton, MenuItem} from 'react-bootstrap';

export default ({
    language,
    changeLanguage
}) => (
    <SplitButton title={language} pullRight id="split-button-pull-right">
        <MenuItem
            eventKey="ua"
            onSelect = {(eventKey) => {changeLanguage('ua')}}>UA</MenuItem>
        <MenuItem
            eventKey="ru"
            onSelect = {(eventKey) => {changeLanguage('ru')}}>RU</MenuItem>
        <MenuItem
            eventKey="us"
            onSelect = {(eventKey) => {changeLanguage('us')}}>US</MenuItem>
    </SplitButton>
)