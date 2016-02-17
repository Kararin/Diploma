import React from 'react';

export default class Input extends React.Component{
    constructor(props) {
        super(props);
        this.id = Date.now();

        this.input = null;
    }

    render() {

        return (
            <div>
                <input
                    className = "mdl-textfield__input"
                    type = "text"
                    id = {this.id}
                    ref = {node => this.input = node}
                />
                <label
                    className = "mdl-textfield__label"
                    htmlFor = {this.id}
                >
                    {this.props.hint}
                </label>
            </div>
        );
    }

    get value () {
        return this.input.value;
    }

    set value (value) {
        this.input.value = value;
    }
}