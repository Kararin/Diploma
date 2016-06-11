import {connect} from 'react-redux';
import Buttons from '../views/LanguageButtons';
import {changeLanguage} from '../languageActions';

const mapStateToProps = ({language}) => {
    return {
        language: language.lang
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (lang) => {
            dispatch(changeLanguage(lang));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);