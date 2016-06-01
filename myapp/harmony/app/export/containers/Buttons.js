import {connect} from 'react-redux';
import Buttons from '../views/Buttons';
import { exportToHtml } from '../actions';

const mapStateToProps = (state) => {
     return {
         data: {
             scheduleId: state.schedule.schedule.current,
             dates: state.dates
         }
     };
};


const mapDispatchToProps = (dispatch) => {
     return {
         actions: {
            toHtml: (scheduleId, dates) => {
                dispatch(exportToHtml(scheduleId, dates));
            }
         }
     };
};


export default connect(mapStateToProps, mapDispatchToProps)(Buttons);