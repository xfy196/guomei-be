const toIOSDate = (date) => {
    let newDate = new Date(date || Date.now());
    newDate.setMinutes(newDate.getMinutes() - newDate.getTimezoneOffset());
    return newDate.toISOString();
}

module.exports = {
    toIOSDate,
}