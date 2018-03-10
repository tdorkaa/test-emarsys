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

function calculateDueDate(submitDate, turnAroundTime) {
    let dueDate = new Date(submitDate.getTime());
    addHours(turnAroundTime, dueDate);
    addDays(turnAroundTime, dueDate);
    return dueDate;
};