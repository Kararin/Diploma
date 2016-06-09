import {connect} from 'react-redux';
import Main from './Main';

const mapStateToPtops = ({user}) => {
    return {
        user: {
            id: user.id
        }
    };
};

export default connect(mapStateToPtops)(Main);

