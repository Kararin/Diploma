import DatesModel from '../../harmony/app/myDates/model/DatesModel';
import expect from 'expect';

describe('get getStartOfWeek', () => {
    it('Saturday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('04.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Sunday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('05.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Monday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('06.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Tuesdday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('07.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Wednesday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('08.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Thursday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('09.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });

    it('Friday should return Monday', () => {
        var startDate = DatesModel.toMomentDate('10.06.2016'),
            resultDay = DatesModel.toMomentDate('06.06.2016'),
            Monday = DatesModel.getStartOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Monday));
    });
});

describe('get getEndOfWeek', () => {
    it('Saturday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('04.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Sunday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('05.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Monday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('06.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Tuesdday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('07.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Wednesday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('08.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Thursday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('09.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });

    it('Friday should return Friday', () => {
        var startDate = DatesModel.toMomentDate('10.06.2016'),
            resultDay = DatesModel.toMomentDate('10.06.2016'),
            Friday = DatesModel.getEndOfWeek(startDate);

        expect(DatesModel.toString(resultDay)).toEqual(DatesModel.toString(Friday));
    });
});