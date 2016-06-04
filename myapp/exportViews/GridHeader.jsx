'use strict';
var React = require('react');

class Header extends React.Component{
    render() {
        return (
            <tr>
                <td>Name</td>
                {this.props.days.map(item => (
                    <td
                        key = {item.id}>
                        {item.name}
                    </td>
                ))}
            </tr>
        )
    }
}

Header.defaultProps = {
    days: []
};

module.exports = Header;