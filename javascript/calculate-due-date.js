function calculateDueDate(submitDate, turnAroundTime) {
    submitDate.setHours(submitDate.getHours()+ turnAroundTime);
    return submitDate;
};