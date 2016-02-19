import Teacher from 'model/Teacher';

export const addTeacher = (teacherInfo) => {
    return {
        type: 'ADD_TEACHER',
        teacher: new Teacher(teacherInfo)
    };
};