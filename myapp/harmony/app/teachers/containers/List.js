import {connect} from 'react-redux';
import List from '../views/List';

const mapStateToProps = ({
    teachers,
    language
}) => {
    var {data, inSchedule} = teachers,
        notInSchedule = data.filter(item => !inSchedule.has(item.id));

    return {
        teachers: notInSchedule,
        lang: language.lang
    };
};

export default connect(mapStateToProps)(List);