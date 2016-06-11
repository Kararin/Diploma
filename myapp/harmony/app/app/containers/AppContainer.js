import {connect} from 'react-redux';
import App from '../views/App';
import { userHasRight } from '../../user/userSelectors';
import * as rightsName from '../../rights/rightsSelectors';

const mapStateToProps = ({user}) => {
    var showTeachers = userHasRight(user, rightsName.showTeachers),
        showOptions = userHasRight(user, rightsName.showOptions),
        showUsers = userHasRight(user, rightsName.showUsers);

    return {
        showTeachers,
        showOptions,
        showUsers
    };
};

export default connect(mapStateToProps, null)(App);