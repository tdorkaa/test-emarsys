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
    if (dayOfWeek > WORK_WEEK_END) {
        dueDate.setDate(dueDate.getDate() + 7 - dayOfWeek + 1);
    }
}

function calculateDueDate(submitDate, turnAroundTime) {
    validateInputs(submitDate, turnAroundTime);

    let dueDate = new Date(submitDate.getTime());
    addHours(turnAroundTime, dueDate);
    addDays(turnAroundTime, dueDate);
    return dueDate;
}