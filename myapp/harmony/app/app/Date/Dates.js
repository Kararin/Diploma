import moment from 'moment';

export default class Dates {
    static getStartOfWeek (currentDate) {
        var mapDays = {
                0: 1,
                1: 0,
                2: -1,
                3: -2,
                4: -3,
                5: -4,
                6: 2
            },
            currentDay = moment(currentDate).format('d');

        return moment(currentDate).add(mapDays[currentDay], 'd');
    }

    static getEndOfWeek (currentDate) {
        var mapDays = {
                0: 5,
                1: 4,
                2: 3,
                3: 2,
                4: 1,
                5: 0,
                6: -1
            },
            currentDay = moment(currentDate).format('d'),
            result = moment(currentDate).add(mapDays[currentDay], 'd');

        return result;
    }
}