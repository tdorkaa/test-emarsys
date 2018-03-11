const WORK_DAY_START = 9;
const WORK_DAY_END = 17;
const WORK_DAY_LENGTH = WORK_DAY_END - WORK_DAY_START;
const WORK_WEEK_LENGTH = 5;

function addHours(turnAroundTime, dueDate) {
    let hoursToAdd = turnAroundTime % WORK_DAY_LENGTH;
    let hourOfDay = dueDate.getHours() + hoursToAdd;
    if (hourOfDay > WORK_DAY_END) {
        dueDate.setDate(dueDate.getDate() + 1);
        dueDate.setHours(WORK_DAY_START + hourOfDay - WORK_DAY_END);
    } else {
        dueDate.setHours(hourOfDay);
    }
}

function addDays(turnAroundTime, dueDate) {
    let daysToAdd = Math.floor(turnAroundTime / WORK_DAY_LENGTH);
    daysToAdd = daysToAdd + Math.floor(daysToAdd / WORK_WEEK_LENGTH) * 2;
    dueDate.setDate(dueDate.getDate() + daysToAdd);

    let dayOfWeek = dueDate.getDay();
    if (dayOfWeek > WORK_WEEK_LENGTH) {
        dueDate.setDate(dueDate.getDate() + 7 - dayOfWeek + 1);
    }
}

function validateSubmitDate(submitDate) {
    if (!(submitDate instanceof Date)) {
        throw 'Invalid submit date: should be an instance of Date';
    }

    let submitDay = submitDate.getDay();
    let submitHour = submitDate.getHours();
    if (submitDay > WORK_WEEK_LENGTH || WORK_DAY_START > submitHour || WORK_DAY_END < submitHour) {
        throw 'Invalid submit date: should be during business hours.';
    }
}

function validateTurnAroundTime(turnAroundTime) {
    if (typeof turnAroundTime !== 'number' || turnAroundTime < 0 || turnAroundTime !== Math.floor(turnAroundTime)) {
        throw 'Invalid turnAroundTime: should be a natural number';
    }
}

function validateInputs(submitDate, turnAroundTime) {
    validateTurnAroundTime(turnAroundTime);
    validateSubmitDate(submitDate);
}

function calculateDueDate(submitDate, turnAroundTime) {
    validateInputs(submitDate, turnAroundTime);

    let dueDate = new Date(submitDate.getTime());
    addHours(turnAroundTime, dueDate);
    addDays(turnAroundTime, dueDate);
    return dueDate;
}