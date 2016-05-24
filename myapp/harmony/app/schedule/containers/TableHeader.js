import {connect} from 'react-redux';
import TableHeader from '../views/TableHeader';

const mapStateToProps = ({days}) => {
    return {
        days: days.data
    };
};

export default connect(mapStateToProps)(TableHeader);