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
}