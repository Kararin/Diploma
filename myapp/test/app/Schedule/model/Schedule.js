import expect from 'expect';
import Schedule from '../../../../harmony/app/schedule/model/ScheduleModel';

describe('delete from schedule item', () => {
    var schedule;

    beforeEach(() => {
        schedule = new Schedule();
    });

    it('deleteSubDay should delete ch', () => {
        var day = {
                id: 2,
                ch: [],
                zn: []
            },
            resultDay = {
                id: 2,
                zn: []
            };

        expect(schedule.deleteSubDay(day, 'ch')).toEqual(resultDay);
    });

    it('deleteSubDay should delete zn if it is null', () => {
        var day = {
                id: 2,
                ch: [],
            },
            resultDay = {
                id: 2,
                ch: []
            };

        expect(schedule.deleteSubDay(day, 'zn')).toEqual(resultDay);
    });

    it('deleteDayIfEmpty should display that day is deleted', () => {
        var day = {
                id: 1
            },
            result = {
                id: 1,
                deleted: true
            };

        expect(schedule.deleteDayIfEmpty(day)).toEqual(result);
    });

    it ('deleteDayIfEmpty should\'t shouw that deay is deleted', () => {
        var day = {
                id: 1,
                ch: []
            },
            result = {
                id: 1,
                deleted: false
            };

        expect(schedule.deleteDayIfEmpty(day)).toEqual(result);
    });

    it('removeItemInArray should remove day', () => {
        var days = [{
                id: 1,
                ch: []
            }, {
                id: 2,
                zn: []
            }, {
                id: 4,
                zn: []
            }],
            result = [{
                id: 1,
                ch: []
            }, {
                id: 4,
                zn: []
            }];

         expect(schedule.removeItemInArray(days, 2)).toEqual(result);
    });

    it('removeItemInArray shouldn\'t remove day', () => {
        var days = [{
                id: 1,
                ch: []
            }, {
                id: 2,
                zn: []
            }, {
                id: 4,
                zn: []
            }],
            result = [{
                id: 1,
                ch: []
            }, {
                id: 2,
                zn: []
            }, {
                id: 4,
                zn: []
            }];

         expect(schedule.removeItemInArray(days, 5)).toEqual(result);
    });

    it ('updateItemInArray dhould update day', () => {
        var days = [{
                id: 1,
                ch: []
            }, {
                id: 2,
                zn: []
            }, {
                id: 4,
                zn: []
            }],
            dayToUpdate = {
                id: 2,
                ch: []
            },
            result = [{
                id: 1,
                ch: []
            }, {
                id: 4,
                zn: []
            }, {
                id: 2,
                ch: []
            }];

        expect(schedule.updateItemInArray(days, dayToUpdate)).toEqual(result);
    });

    it ('deleteTeacherIfNoDays should delete teacher', () => {
        var teacher = {
                id: 1,
                days: []
            },
            result = {
                id: 1,
                deleted: true
            };

        expect(schedule.deleteTeacherIfNoDays(teacher)).toEqual(result);
    });

    it ('deleteTeacherIfNoDays shouldn\'t delete teacher', () => {
        var teacher = {
                id: 1,
                days: [{id: 1}, {}]
            },
            result = {
                id: 1,
                deleted: false
            };

        expect(schedule.deleteTeacherIfNoDays(teacher)).toEqual(result);
    });

    it('deleteFromItem should delete day type', () => {
        var item = {
                id: 1,
                teachers: [{
                    id: 1,
                    days: [{
                        id: 1,
                        ch: ['13:00'],
                        zn: ['12:00']
                    }]
                }]
            },
            dataToDelete = {
                teacherId: 1,
                dayId: 1,
                type: 'ch'
            },
            result = {
                deleted: false,
                updatedItem: {
                    id: 1,
                    teachers: [{
                        id: 1,
                        days: [{
                            id: 1,
                            zn: ['12:00']
                        }]
                    }]
                }
            };

        expect(schedule.deleteFromItem(item, dataToDelete)).toEqual(result);
    });

    it('deleteFromItem should delete day', () => {
        var item = {
                id: 1,
                teachers: [{
                    id: 1,
                    days: [{
                        id: 1,
                        ch: ['13:00']
                    }, {
                        id: 2,
                        ch: ['9:00']
                    }]
                }]
            },
            dataToDelete = {
                teacherId: 1,
                dayId: 1,
                type: 'ch'
            },
            result = {
                deleted: false,
                updatedItem: {
                    id: 1,
                    teachers: [{
                        id: 1,
                        days: [{
                            id: 2,
                            ch: ['9:00']
                        }]
                    }]
                }
            };

        expect(schedule.deleteFromItem(item, dataToDelete)).toEqual(result);
    });

        it('deleteFromItem should delete teacher', () => {
        var item = {
                id: 1,
                teachers: [{
                    id: 1,
                    days: [{
                        id: 1,
                        ch: ['13:00']
                    }]
                }, {
                    id: 2,
                    days: []
                }]
            },
            dataToDelete = {
                teacherId: 1,
                dayId: 1,
                type: 'ch'
            },
            result = {
                deleted: false,
                updatedItem: {
                    id: 1,
                    teachers: [{
                        id: 2,
                        days: []
                    }]
                }
            };

        expect(schedule.deleteFromItem(item, dataToDelete)).toEqual(result);
    });

    it('deleteFromItem should delete item', () => {
        var item = {
                id: 1,
                teachers: [{
                    id: 1,
                    days: [{
                        id: 1,
                        ch: ['13:00']
                    }]
                }]
            },
            dataToDelete = {
                teacherId: 1,
                dayId: 1,
                type: null
            },
            result = {
                deleted: true,
                id: 1
            };

        expect(schedule.deleteFromItem(item, dataToDelete)).toEqual(result);
    });
});

describe('get current schedule item by dates', () => {
    var schedule = new Schedule({
        data: [{
            id: 1,
            teachers: [{
                id: 1,
                days: [{
                    id: 1,
                    ch: ['13:00']
                }]
            }],
            dates: {
                start: '24.12.2015',
                end: '14.02.2016'
            }
        }]
    });
    it('should get current item', function () {
        var dates = {
                start:'01.01.2016',
                end: '05.02.2016'
            },
            result = {
            id: 1,
            teachers: [{
                id: 1,
                days: [{
                    id: 1,
                    ch: ['13:00']
                }]
            }],
            dates: {
                start: '24.12.2015',
                end: '14.02.2016'
            }
        };

        expect(schedule.getCurrentItemByDate(dates)).toEqual(result);
    });


    it('should return empty value', function () {
        var schedule = new Schedule(),
            dates = {
                start:'01.01.2016',
                end: '05.02.2016'
            },
            result = null;

        expect(schedule.getCurrentItemByDate(dates)).toEqual(result);
    });
});


describe('removeTeacherFromItem?', () => {
    var schedule = new Schedule();
    it('should delete teacher from item', () => {
        var item = {
            id: 1,
            teachers: [{
                id: 1,
                days: [{
                    id: 1,
                    ch: ['13:00']
                }]
            }, {
                id: 2,
                days: [{
                    id: 1,
                    ch: ['13:00']
                }]
            }],
            dates: {
                start: '24.12.2015',
                end: '14.02.2016'
            }
        },
        result = {
            id: 1,
            teachers: [{
                id: 1,
                days: [{
                    id: 1,
                    ch: ['13:00']
                }]
            }],
            dates: {
                start: '24.12.2015',
                end: '14.02.2016'
            }
        };

        expect(schedule.removeTeacherFromItem(item, 2)).toEqual(result);
    });
});
