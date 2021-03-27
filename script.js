//variables
var container = $('.row');
var hour = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var saveBtnEl
var today = moment();
var time = moment().format("hh");

console.log(time);

//display today's date in the header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//dynamically create the schedule rows inside a for loop
for (var i = 0; i < hour.length; i++) {
    //create div .hour
    var hourEl = $('<div>');
    //add content to element
    hourEl.text(hour[i]);
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
if (hour[i] === time) {
    timeBlockEl.addClass('present');
} else if (hour[i] < time) {
    timeBlockEl.addClass('past');
} else {
    timeBlockEl.addClass('future');
}

//REMAINING:
//split hour into key value pairs so you can compare the hour without AM or PM to time
//write function so that save button stores to local storage
//figure out why the rows be doin' that
