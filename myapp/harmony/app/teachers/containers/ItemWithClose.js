import {connect} from 'react-redux';
import ItemWithClose from '../views/ItemWithClose';
import { removeFromSchedule } from '../actions';
import { removeTeacherFromCurrentSchedule } from '../../schedule/actions';

const mapStateToProps = (state, props) => {
     var {id, fullName} = props;

     return {
         data: {
             id,
             fullName
         }
     };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onClickAction: (id) => {
                dispatch(removeFromSchedule(id));
                dispatch(removeTeacherFromCurrentSchedule(id));
            },
            removeFromSchedule: (id) => {
                dispatch(removeFromSchedule(id));
            }
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemWithClose);