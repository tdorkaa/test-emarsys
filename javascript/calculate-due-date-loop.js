function calculateDueDateLoop(submitDate, turnAroundTime) {
    validateInputs(submitDate, turnAroundTime);

    let dueDate = new Date(submitDate.getTime());
    for (let i = 0; i < turnAroundTime; i++) {
        if (dueDate.getHours() === WORK_DAY_END) {
            dueDate.setDate(dueDate.getDay() === WORK_WEEK_END ? dueDate.getDate() + 3 : dueDate.getDate() + 1);
            dueDate.setHours(WORK_DAY_START);
        }
        dueDate.setHours(dueDate.getHours() + 1);
    }
    return dueDate;
}