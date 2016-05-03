import Immutable from 'immutable';

export default class Schedule {
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
}