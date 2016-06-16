import {connect} from 'react-redux';
import UserView from '../views/UserView'

const mapStateToProps = ({language}) => {
    return {
        lang: language.lang
    };
};

export default connect(mapStateToProps)(UserView);