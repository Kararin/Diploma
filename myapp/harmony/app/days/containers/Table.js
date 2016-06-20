import {connect} from 'react-redux';
import Table from '../views/Table.jsx';
import {fetchDays} from '../actions';

const mapStateToDispatch = ({days, language}) => {
    return {
        days: days.data,
        lang: language.lang
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => {
            dispatch(fetchDays());
        }
    };
};

export default connect(mapStateToDispatch, mapDispatchToProps)(Table);