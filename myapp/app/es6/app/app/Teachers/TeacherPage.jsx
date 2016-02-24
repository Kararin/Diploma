import React from 'react';
import {connect} from 'react-redux';
import AddTeacher from 'teacher/Add';
import List from 'teacher/List';
import {addTeacher} from 'actions/teachers';
import {toggleAddPage} from 'actions/pages';
import HeaderButtons from 'teacher/PageHeaderButtons';
import AddPage from 'teacher/Add';
import Page from 'components/Page';

//TODO: rename files
let TeacherPage = ({
  onAddPageShow,
  onAddTeacher,
  idAddPageShown,
  display
}) => {
  return (
    <Page
      title = 'Teachers'
      buttons = {{
        isAdd: true
      }}
      actions = {{
        onAdd: onAddPageShow.bind(this)
      }}
      display = {display}
    >
      <List/>
      <AddPage
          onAdd = {onAddTeacher.bind(this)}
          onClose = {onAddPageShow.bind(this)}
          isShown = {idAddPageShown}
      />
  </Page>
);
}

const mapStatesToProps = (state) => {
  return {idAddPageShown: state.pages['teachers'].isAddShown}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddTeacher: (teacherInfo) => {
      dispatch(addTeacher(teacherInfo));
    },
    onAddPageShow: () => {
      dispatch(toggleAddPage('teachers'));
    }
  };
};

TeacherPage = connect(mapStatesToProps, mapDispatchToProps)(TeacherPage);

export default TeacherPage;
