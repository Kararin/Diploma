import React from 'react';
import TR from '../../translate/translate';

const Header = ({
    days,
    lang
}) => (
    <tr>
        <td>{TR(lang, 'NAME')}</td>
        {days.map(item => (
            <td
                key = {item.id}>
                {item.name}
            </td>
        ))}
    </tr>
);

Header.defaultProps = {
    days: []
};

export default Header;