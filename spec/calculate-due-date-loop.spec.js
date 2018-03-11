describe('calculateDueDateLoop', function () {
    let submitDate;
    let turnAroundTimeInHours;
    let dueDate;

    it('should calculate the due date to be 2018-03-12 12AM when the submit date: 2018-03-12 (Monday) 10AM and the turnaroudtime: 2 hours', function () {
        submitDate = new Date('2018-03-12T10:00:00');
        turnAroundTimeInHours = 2;
        dueDate = new Date('2018-03-12T12:00:00');
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-13 12AM when the submit date: 2018-03-12 (Monday) 10AM and the turnaroudtime: 10 hours', function () {
        submitDate = new Date('2018-03-12T10:00:00');
        dueDate = new Date('2018-03-13T12:00:00');
        turnAroundTimeInHours = 10;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 10AM when the submit date: 2018-03-12 (Monday) 4PM and the turnaroudtime: 10 hours', function () {
        submitDate = new Date('2018-03-12T16:00:00');
        dueDate = new Date('2018-03-14T10:00:00');
        turnAroundTimeInHours = 10;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 4PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 7 hours', function () {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-13T16:00:00');
        turnAroundTimeInHours = 7;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 4PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 40 hours', function () {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-19T17:00:00');
        turnAroundTimeInHours = 40;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-27 2PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 85 hours', function () {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-27T14:00:00');
        turnAroundTimeInHours = 85;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-19 12AM when the submit date: 2018-03-16 (Friday) 5PM and the turnaroudtime: 3 hours', function () {
        submitDate = new Date('2018-03-16T17:00:00');
        dueDate = new Date('2018-03-19T12:00:00');
        turnAroundTimeInHours = 3;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-19 12AM when the submit date: 2018-03-15 (Thursday) 5PM and the turnaroudtime: 11 hours', function () {
        submitDate = new Date('2018-03-15T17:00:00');
        dueDate = new Date('2018-03-19T12:00:00');
        turnAroundTimeInHours = 11;
        expect(calculateDueDateLoop(submitDate, turnAroundTimeInHours)).toEqual(dueDate);
    });

    describe('calculateDueDateLoop validation', function () {
        it('should throw error when the bug is not submitted during working hours, the submit date: 2018-03-15 (Thursday) 6PM', function () {
            submitDate = new Date('2018-03-15T18:00:00');
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be during business hours.');
        });

        it('should throw error when the bug is not submitted during working hours, the submit date: 2018-03-15 (Thursday) 8AM', function () {
            submitDate = new Date('2018-03-15T08:00:00');
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be during business hours.');
        });

        it('should throw error when the bug is not submitted during working hours, the submit date: 2018-03-17 (Saturday) 8AM', function () {
            submitDate = new Date('2018-03-17T08:00:00');
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be during business hours.');
        });

        it('should throw error when submitDate parameter is not an instance of Date', function () {
            submitDate = 'submit date';
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be an instance of Date');
        });

        it('should throw error when submitDate parameter is null', function () {
            submitDate = null;
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be an instance of Date');
        });

        it('should throw error when submitDate parameter is undefined', function () {
            submitDate = undefined;
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be an instance of Date');
        });

        it('should throw error when submitDate parameter is a number', function () {
            submitDate = 3;
            turnAroundTimeInHours = 11;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid submit date: should be an instance of Date');
        });

        it('should throw error when turnAroundTime parameter is not a number', function () {
            submitDate = new Date('2018-03-15T17:00:00');
            turnAroundTimeInHours = 'not a number';
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid turnAroundTime: should be a natural number');
        });

        it('should throw error when turnAroundTime parameter is null', function () {
            submitDate = new Date('2018-03-15T17:00:00');
            turnAroundTimeInHours = null;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid turnAroundTime: should be a natural number');
        });

        it('should throw error when turnAroundTime parameter is undefined', function () {
            submitDate = new Date('2018-03-15T17:00:00');
            turnAroundTimeInHours = undefined;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid turnAroundTime: should be a natural number');
        });

        it('should throw error when turnAroundTime parameter is negative', function () {
            submitDate = new Date('2018-03-15T17:00:00');
            turnAroundTimeInHours = -3;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid turnAroundTime: should be a natural number');
        });

        it('should throw error when turnAroundTime parameter is not a whole number', function () {
            submitDate = new Date('2018-03-15T17:00:00');
            turnAroundTimeInHours = Math.PI;
            expect(function () {
                calculateDueDateLoop(submitDate, turnAroundTimeInHours)
            }).toThrow('Invalid turnAroundTime: should be a natural number');
        });
    });
});