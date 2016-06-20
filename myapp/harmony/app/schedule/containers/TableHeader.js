import {connect} from 'react-redux';
import TableHeader from '../views/TableHeader';

const mapStateToProps = ({days, language}) => {
    return {
        days: days.data,
        lang: language.lang
    };
};

export default connect(mapStateToProps)(TableHeader);