function calculateDueDate(submitDate, turnAroundTime) {
    let dueDate = new Date(submitDate.getTime());

    let daysToAdd = Math.floor(turnAroundTime/8);
    let hoursToAdd = turnAroundTime%8;

    dueDate.setDate(dueDate.getDate() + daysToAdd);
    dueDate.setHours(dueDate.getHours() + hoursToAdd);
    return dueDate;
};