import {connect} from 'react-redux';
import {isAddNewOpen} from '../actions';
import Page from '../views/Page';

const mapStateToProps = ({language}) => {
    return {
        lang: language.lang
    };
};

const mapDispatchToProps = () => (
    (dispatch) => ({
        onAddAction: () => {
            dispatch(isAddNewOpen(true));
        }
    })
);

export default connect(mapStateToProps, mapDispatchToProps)(Page);

