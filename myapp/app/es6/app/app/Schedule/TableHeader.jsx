import React from 'react';

const Header = ({
    days
}) => (
    <tr>
        <td>Name</td>
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