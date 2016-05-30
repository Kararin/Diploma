import {List} from 'immutable';
import {dateFormat} from '../../core/settings';
import moment from 'moment';
import Dates from '../../myDates/model/DatesModel';

export default class Schedule {
    constructor (params = {
        data: [],
        current: null
    }) {
        this.store = List(params.data);
        this.current = params.current;
    }

    get data () {
        return this.store;
    }

    get currentItem () {
        return this.store.find(item => item.id === this.current);
    }

    static getNewScheduleItem ({
        teacherId,
        dayId,
        value,
        type
    }) {
        return {
            teachers: [{
                id: teacherId,
                days: [{
                    id: dayId,
                    [type]: [value]
                }]
            }]
        };
    }

    static getCellValue({
        schedule,
        teacherId,
        current,
        dayId,
        type
    }) {
        var scheduleItem = schedule.find(item => item.id === current),
            teacher,
            day,
            cellValue = '';

        //TODO: refactor
        scheduleItem && (teacher = scheduleItem.teachers.find(item => item.id === teacherId));
        teacher && (day = teacher.days.find(item => item.id === dayId));
        day && (cellValue = day[type]);

        return cellValue && cellValue.join('');
    }

    static mergeItems(mainItem, itemToMerge) {
        var result = Object.assign({}, mainItem, {
            teachers: this.mergeTeachers(mainItem.teachers, itemToMerge.teachers)
        });

        return result;
    }

    static mergeTeachers(mainTeachers, teachersToMerge) {
        var result,
            newTeachersToMerge = Object.assign([], teachersToMerge);

        result = mainTeachers.map(item => {
           var teacher = newTeachersToMerge.find(teacher => teacher.id === item.id),
               teacherIndex = newTeachersToMerge.findIndex(teacher => teacher.id === item.id),
               resultTeacher = item;

            if (teacher) {
                resultTeacher = Object.assign({}, teacher,{
                    days: this.mergeDays(teacher.days, item.days)
                });

                newTeachersToMerge.splice(teacherIndex, 1);
            }

           return resultTeacher;
        });

        result.push(...newTeachersToMerge);

        return result;
    }

    static mergeDays(mainDays, daysToMerge) {
        var newDays = Object.assign([], daysToMerge),
            result;

        result = mainDays.map(item => {
           var day = newDays.find(day => day.id === item.id),
               dayIndex = newDays.findIndex(day => day.id === item.id),
               resultDay = item;

           if (day) {
               resultDay = this.mergeTimes({
                   newDay: item,
                   oldDay: day
                });

               newDays.splice(dayIndex, 1);
           }

           return resultDay;
        });

        result.push(...newDays);

        return result;
    }

    static mergeTimes({newDay, oldDay}) {
        var result;

        result = Object.assign({}, oldDay, {
            ch: newDay.ch ? newDay.ch : oldDay.ch,
            zn: newDay.zn ? newDay.zn : oldDay.zn
        });

        return result;
    }

    static deleteDuplicate(array) {
        var newArray = Object.assign([], array);

        newArray.sort();

        for (var index = 0; index < newArray.length - 1; index++) {
             if (newArray[index] === newArray[index + 1]) {
                 newArray.splice(index, 1);
                 index--;
             }
        }

        return newArray;

    }

    /**
     * (Return schedule item that exists in defined time intervals)
     *
     * @param [dates] (start and and of time intervals)
     * @returns (schedule item that exists in defined time interval)
     */
    getCurrentItemByDate (dates = {}) {
        var current = null,
            i = 0;

        while (!current && this.store.get(i)) {
            let item = this.store.get(i),
                start = Dates.isSameOrBefore(item.dates.start, dates.start),
                end = Dates.isSameOrAfter(item.dates.end || dates.end, dates.end);

            if (start && end) {
                current = item;
            }

            i++;
        }

        return current;
    }


    deleteFromItem (item, {
        teacherId,
        type,
        dayId
    }) {
        var teacher = item.teachers.find(item => item.id === teacherId),
            day = teacher.days.find(item => item.id === dayId),
            deleteDayResult,
            deleteTeacherResult,
            deleteScheduleResult;

        day = this.deleteSubDay(day, type);
        deleteDayResult = this.deleteDayIfEmpty(day);

        if (deleteDayResult.deleted) {
            teacher.days = this.removeItemInArray(teacher.days, deleteDayResult.id);
        } else {
            teacher.days = this.updateItemInArray(teacher.days, day);
        }

        deleteTeacherResult = this.deleteTeacherIfNoDays(teacher);

        if (deleteTeacherResult.deleted) {
            item.teachers = this.removeItemInArray(item.teachers, deleteTeacherResult.id);
        } else {
            item.teachers = this.updateItemInArray(item.teachers, teacher);
        }

        deleteScheduleResult = this.deleteScheduleItemIfNoTeachers(item);

        return deleteScheduleResult.deleted ? {
            deleted: true,
            id: item.id
        } : {
            deleted: false,
            updatedItem: item
        };
    }

    deleteSubDay(day, type) {
        var newDay = Object.assign({}, day);

        delete newDay[type];
        return newDay;
    }

    deleteDayIfEmpty(day) {
        return {
            id: day.id,
            deleted: !day.ch && !day.zn
        };
    }

    removeItemInArray(sourceArray, itemIdToRemove) {
        var dayIndex = sourceArray.findIndex(item => item.id === itemIdToRemove),
            copyOfDays = Object.assign([], sourceArray);

        if (dayIndex >= 0) {
            copyOfDays.splice(dayIndex, 1);
        }

        return copyOfDays;
    }

    updateItemInArray(daysArray, day) {
        var updatedDays = this.removeItemInArray(daysArray, day.id);

        updatedDays.push(day);

        return updatedDays;
    }

    deleteTeacherIfNoDays(teacher) {
        return {
            id: teacher.id,
            deleted: !teacher.days.length
        };
    }

    deleteScheduleItemIfNoTeachers(scheduleItem) {
        return {
            id: scheduleItem.id,
            deleted: !scheduleItem.teachers.length
        };
    }

    /**
     * return current schedule Item of defined week
     * by scrict comparison
     * @param dates (description)
     * @returns (description)
     */
    getCurrentOfThisWeek(dates) {
        var current = null,
            i = 0;

        while (!current && this.store.get(i)) {
            let item = this.store.get(i),
                start = Dates.isSameOrBefore(item.dates.start, dates.start),
                end = Dates.isSameOrAfter(item.dates.end, dates.end);

            if (start && end) {
                current = item;
            }

            i++;
        }

        return current;
    }

    updateScheduleItemWithDate(scheduleItemId, startDate) {
        var item = this.store.find(item => item.id === scheduleItemId),
            momentStartDate = Dates.toMomentDate(startDate),
            finishDate = Dates.getEndOfWeek(momentStartDate.subtract(7, 'days'));

        return Object.assign({}, item, {
            dates: {
                start: item.dates.start,
                end: Dates.toString(finishDate)
            }
        });
    }

    removeTeacherFromItem(scheduleItem, teacherId) {
        var updatedTeachers = this.removeItemInArray(scheduleItem.teachers, teacherId);

        return Object.assign({}, scheduleItem, {
            teachers: updatedTeachers
        });
    }
}