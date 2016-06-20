import {connect} from 'react-redux';
import Page from '../views/Page';


const mapStateToProps = ({language}) => {
     return {
         lang: language.lang
     };
};

export default connect(mapStateToProps)(Page);