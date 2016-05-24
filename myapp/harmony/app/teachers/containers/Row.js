import {connect} from 'react-redux';
import Row from '../views/Row';
import {
    deletePositionServer,
    toggleEditMode,
    editPositionServer} from '../../teacherPositions/actions';

const mapStateToProps = ({teacherPositions}) => {
  return {
      teacherPositions: teacherPositions.data.toArray()
  };
};

export default connect(mapStateToProps)(Row);