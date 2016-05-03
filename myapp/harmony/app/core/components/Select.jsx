import React from 'react';
import Option from './Option';

export default class Select extends React.Component {
    constructor(props) {
        super(props);

        this.ref = null;
    }

    render() {
        var {store, defaultValue} = this.props;

        return (
            <div>
                <select
                    className = 'form-control'
                    ref = {c => this.ref = c}>
                    {store.map(item => (
                        <Option
                            key = {item.id}
                            eventKey = {item.id}
                            value = {item.name}
                            selected = {item.id === defaultValue}/>
                    ))}
                </select>
            </div>
        )
    }

    getValue() {
        return this.ref.value;
    }
}

Select.defaultProps = {
    title: 'Select teacher position',
    defaultValue: -1,
    store: []
};