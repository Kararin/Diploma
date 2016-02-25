import React from 'react';
import Input from 'components/Input';
import Button from 'components/Button';

const AddNew = ({
    onAdd
}) => {
    var name = '',
        shortName = '';

    return (
        <div>
            <Input hint = 'Name'
                   ref = {node => name = node}
                   width = '100px'/>
            <Input hint = 'Short name'
                   ref = {node => shortName = node}
                   width = '100px'/>
            <Button
                width = '60px'
                onClick = {e => {
                    e.preventDefault();
                    onAdd({
                        name: name.value,
                        shortName: shortName.value
                    });

                    name.value = '';
                    shortName.value = '';
            }}>
                Add
            </Button>
        </div>
    );
}

AddNew.defaultProps = {
    onAdd: () => console.log(' onAdd not implemented yet')
};

AddNew.propTypes = {
    onAdd: React.PropTypes.func
};

export default AddNew;