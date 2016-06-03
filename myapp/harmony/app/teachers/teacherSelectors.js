import { createSelector } from 'reselect';

export const teachersInShedule = ({teachers}) => {
    return teachers.data.filter(item => teachers.inSchedule.has(item.id));
};

export const teachersCount = ({teachers}) => teachers.data.count();

export const teacherInScheduleCount = createSelector(
    teachersInShedule,
    (teachers) => teachers.count()
);

export const selectTeachersIds = (teachers) => teachers.map(item => item.id);