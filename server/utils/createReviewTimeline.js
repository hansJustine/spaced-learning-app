
function addDays(date, days) {
    const newDate = new Date(date);
    const daysAdded = newDate.getDate() + days;
    newDate.setDate(daysAdded);
    return newDate;
}

module.exports.createReviewTimeline = async function (reviewTimeline) {
    for (let i = 0; i < 5; i++) {
        let daysAddedComp = (reviewTimeline[i].forgettingDays * 2) + 1;
        let increasedDay = addDays(reviewTimeline[i].date, daysAddedComp);
        reviewTimeline.push({ forgettingDays: daysAddedComp, date: increasedDay });
    }
    return reviewTimeline;
}

// module.exports = createReviewTimeline;