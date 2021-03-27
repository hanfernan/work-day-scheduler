//variables
var container = $('.row');
var hourContainer = [
    { hour: 9, period: "AM" },
    { hour: 10, period: "AM" },
    { hour: 11, period: "AM" },
    { hour: 12, period: "PM" },
    { hour: 1, period: "PM" },
    { hour: 2, period: "PM" },
    { hour: 3, period: "PM" },
    { hour: 4, period: "PM" },
    { hour: 5, period: "PM" },
];
var saveBtnEl
var today = moment();
var time = moment().format("hh");

console.log(time);

//display today's date in the header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//dynamically create the schedule rows inside a for loop
for (var i = 0; i < hourContainer.length; i++) {
    //create div .hour
    var hourEl = $('<div>');
    //add content to element
    hourEl.text(hourContainer[i].hour + hourContainer[i].period);
    //add class to element
    hourEl.addClass('hour');
    //append to container
    container.append(hourEl);

    //create text area .time-block
    var timeBlockEl = $('<textarea>');
    timeBlockEl.text('');
    timeBlockEl.addClass('time-block');
    container.append(timeBlockEl);

    //create save button .saveBtn
    var saveBtnEl = $('<button>');
    saveBtnEl.text('Save');
    saveBtnEl.addClass('saveBtn');
    container.append(saveBtnEl);
}


//write if else statement incorporating moment to get time to change color
// if (hourContainer.hour[i] === time) {
//     timeBlockEl.addClass('present');
// } else if (hourContainer.hour[i] < time) {
//     timeBlockEl.addClass('past');
// } else {
//     timeBlockEl.addClass('future');
// }

//REMAINING:
//split hour into key value pairs so you can compare the hour without AM or PM to time
//write function so that save button stores to local storage
//figure out why the rows be doin' that
