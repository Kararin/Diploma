import React from 'react';
import {connect} from 'react-redux';
import AddTeacher from 'teacher/Add';
import List from 'teacher/List';
import {addTeacher} from 'actions/teachers';
import {toggleAddPage} from 'actions/pages';
import HeaderButtons from 'teacher/PageHeaderButtons';
import AddPage from 'teacher/Add';

let TeacherPage  = ({
    onAddPageShow,
    onAddTeacher,
    idAddPageShown
}) => {
  return (
    <div className = 'container'>
      <h2 className = 'header'>
        Teachers
      </h2>
      <HeaderButtons onAddShow = {onAddPageShow}/>
      <List/>
      <AddPage
        onAdd = {onAddTeacher}
        isShown = {idAddPageShown}
        onClose = {onAddPageShow}/>
    </div>
  );
}

const mapStatesToProps = (state) => {
  return {
    idAddPageShown: state.pages['teachers'].isAddShown
  }
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
