import {connect} from 'react-redux';
import SavedList from '../views/SavedList';
import {setCurrent} from '../actions';

const mapStateToProps = ({schedule}) => {
     var saved = schedule.data.filter(item => item.id !== schedule.current);

     return {
         data: {
             store: saved
         }
     };
};


const mapDispatchToProps = (dispatch) => {
    return {
        actions: {
            onClickAction: (id) => dispatch(setCurrent(id))
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SavedList);