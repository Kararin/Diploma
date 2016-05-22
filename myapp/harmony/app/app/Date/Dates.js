import moment from 'moment';
import {dateFormat} from '../../core/settings';

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

    static isSameOrBefore(baseDate, toCompareDate) {
        var base = this.toMomentDate(baseDate),
            toCompare = this.toMomentDate(toCompareDate);

        return base.isSameOrBefore(toCompare, 'year') &&
            base.isSameOrBefore(toCompare, 'month') &&
            base.isSameOrBefore(toCompare, 'day');
    }

    static isSameOrAfter(baseDate, toCompareDate) {
        var base = this.toMomentDate(baseDate),
            toCompare = this.toMomentDate(toCompareDate);

        return base.isSameOrAfter(toCompare, 'year') &&
            base.isSameOrAfter(toCompare, 'month') &&
            base.isSameOrAfter(toCompare, 'day');
    }

    static toMomentDate(date) {
        return moment(date, dateFormat);
    }
}