const WORK_DAY_START = 9;
const WORK_DAY_END = 17;
const WORK_DAY_LENGTH = WORK_DAY_END - WORK_DAY_START;
const WORK_WEEK_LENGTH = 5;
const WORK_WEEK_END = 5;


function validateSubmitDate(submitDate) {
    if (!(submitDate instanceof Date)) {
        throw 'Invalid submit date: should be an instance of Date';
    }

    let submitDay = submitDate.getDay();
    let submitHour = submitDate.getHours();
    if (submitDay > WORK_WEEK_END || WORK_DAY_START > submitHour || WORK_DAY_END < submitHour) {
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