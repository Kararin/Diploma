import {connect} from 'react-redux';
import LogIn from '../views/LogIn';
import {checkUser} from '../../user/userActions';

const mapDispatchToProps = (dispatch) => {
    return {
        onLogInClick: (name, pass) => {
            dispatch(checkUser(name, pass));
        }
    };
};

export default connect(null, mapDispatchToProps)(LogIn);