import {connect} from 'react-redux';
import Row from '../Row';
import {
    deletePositionServer,
    toggleEditMode,
    editPositionServer} from '../../../actions/teacherPositions';

const mapStateToProps = ({teacherPositions}) => {
  return {
      teacherPositions: teacherPositions.data.toArray()
  };
};

export default connect(mapStateToProps)(Row);