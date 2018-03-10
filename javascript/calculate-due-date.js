const WORK_DAY_START = 9;
const WORK_DAY_END = 17;
const WORK_DAY_LENGTH = WORK_DAY_END - WORK_DAY_START;

function calculateDueDate(submitDate, turnAroundTime) {
    let dueDate = new Date(submitDate.getTime());

    let daysToAdd = Math.floor(turnAroundTime / WORK_DAY_LENGTH);
    let hoursToAdd = turnAroundTime % WORK_DAY_LENGTH;

    dueDate.setDate(dueDate.getDate() + daysToAdd);

    let hourOfDay = dueDate.getHours() + hoursToAdd;
    if (hourOfDay > WORK_DAY_END) {
        dueDate.setDate(dueDate.getDate() + 1);
        dueDate.setHours(WORK_DAY_START + hourOfDay - WORK_DAY_END);
    } else {
        dueDate.setHours(hourOfDay);
    }
    return dueDate;
};