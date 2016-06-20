import {connect} from 'react-redux';
import LogIn from '../views/LogIn';
import {checkUser} from '../../user/userActions';

const mapStateToProps = ({language}) => {
    return {
        lang: language.lang
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogInClick: (name, pass) => {
            dispatch(checkUser(name, pass));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);