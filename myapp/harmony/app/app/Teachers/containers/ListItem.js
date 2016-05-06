import {connect} from 'react-redux';
import ListItem from '../ListItem';
import {addToSchedule} from '../../../actions/teachers';

const mapStateToProps = (state, {teacher}) => {
    var {teacherPositions: {data: positions}} = state,
        teacherPosition = positions.find(item => item.id === +teacher.position),
        shortName = teacherPosition ? teacherPosition.shortName: '',
        teacherFullName = `${teacher.lastName} ${teacher.name} ${shortName}`;

    return {
        teacher: {
            displayData: teacherFullName,
            id: teacher.id
        }
    };
};

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            addToSchedule: id => dispatch(addToSchedule(id))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ListItem);