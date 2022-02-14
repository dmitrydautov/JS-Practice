const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationMinutes) {
    var meetingEndTimeInHours, meetingEndTimeInMinutes;
    var meetingStartTimeToDate = new Date("01/01/2000 " + startTime);

    if (durationMinutes == 60) {
        meetingEndTimeInMinutes = meetingStartTimeToDate.getMinutes();
        meetingEndTimeInHours = meetingStartTimeToDate.getHours() + 1;
    } else {
        if ((meetingStartTimeToDate.getMinutes() + durationMinutes) >= 60) {
            meetingEndTimeInMinutes = meetingStartTimeToDate.getMinutes() - durationMinutes;
            meetingEndTimeInHours = meetingStartTimeToDate.getHours() + 1;
        } else {
            meetingEndTimeInMinutes = meetingStartTimeToDate.getMinutes() + durationMinutes;
            meetingEndTimeInHours = meetingStartTimeToDate.getHours();
        }
    }

    var dayStartToDate = new Date("01/01/2000 " + dayStart);
    var dayEndToDate = new Date("01/01/2000 " + dayEnd);
    var meetingEndTimeToDate = new Date("01/01/2000 " + meetingEndTimeInHours + ":" + meetingEndTimeInMinutes);

    if ((dayStartToDate <= meetingStartTimeToDate) && (dayEndToDate >= meetingEndTimeToDate)) {
        return true;
    } else {
        return false;
    }
}

console.log(scheduleMeeting("7:00", 15)); // false
console.log(scheduleMeeting("07:15", 30)); // false
console.log(scheduleMeeting("7:30", 30)); // true
console.log(scheduleMeeting("11:30", 60)); // true
console.log(scheduleMeeting("17:00", 45)); // true
console.log(scheduleMeeting("17:30", 30)); // false
console.log(scheduleMeeting("18:00", 15)); // false