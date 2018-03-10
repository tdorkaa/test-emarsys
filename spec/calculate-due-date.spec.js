describe('calculateDueDate', function(){
    let submitDate;
    let turnAroudTimeInHours;
    let dueDate;

    it('should calculate the due date to be 2018-03-12 12AM when the submit date: 2018-03-12 (Monday) 10AM and the turnaroudtime: 2 hours', function() {
        submitDate = new Date('2018-03-12T10:00:00');
        turnAroudTimeInHours = 2;
        dueDate = new Date('2018-03-12T12:00:00');
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-13 12AM when the submit date: 2018-03-12 (Monday) 10AM and the turnaroudtime: 10 hours', function() {
        submitDate = new Date('2018-03-12T10:00:00');
        dueDate = new Date('2018-03-13T12:00:00');
        turnAroudTimeInHours = 10;
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 10AM when the submit date: 2018-03-12 (Monday) 4PM and the turnaroudtime: 10 hours', function() {
        submitDate = new Date('2018-03-12T16:00:00');
        dueDate = new Date('2018-03-14T10:00:00');
        turnAroudTimeInHours = 10;
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 4PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 7 hours', function() {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-13T16:00:00');
        turnAroudTimeInHours = 7;
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-14 4PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 40 hours', function() {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-19T17:00:00');
        turnAroudTimeInHours = 40;
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

    it('should calculate the due date to be 2018-03-27 2PM when the submit date: 2018-03-12 (Monday) 5PM and the turnaroudtime: 85 hours', function() {
        submitDate = new Date('2018-03-12T17:00:00');
        dueDate = new Date('2018-03-27T14:00:00');
        turnAroudTimeInHours = 85;
        expect(calculateDueDate(submitDate, turnAroudTimeInHours)).toEqual(dueDate);
    });

});