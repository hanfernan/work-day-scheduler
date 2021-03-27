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
var today = moment();
var time = moment().format("hh A");
var saveBtnEl

//display today's date on the page in the header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//dynamically create the schedule rows inside a for loop
for (var i = 0; i < hourContainer.length; i++) {
    //create div .hour and add class and content
    var hourEl = $('<div>').addClass('hour').text(hourContainer[i].hour + " " + hourContainer[i].period);
    //append to container
    container.append(hourEl);

    //create text area .time-block
    var timeBlockEl = $('<textarea>').addClass('time-block').text('');
    // timeBlockEl;
    container.append(timeBlockEl);

    //create save button .saveBtn that is attached to the index of each row
    var saveBtnEl = $('<button class="saveBtn" data-index="' + i + '">Save</button>');
    container.append(saveBtnEl);

    //write if else statement incorporating moment to get time to change color
    if (hourContainer[i].hour + " " + hourContainer[i].period == time) {
        timeBlockEl.addClass('present');
    } else if (hourContainer[i].hour + " " + hourContainer[i].period < time) {
        timeBlockEl.addClass('past');
    } else {
        timeBlockEl.addClass('future');
    }
}

function init() {

}




//REMAINING:
//figure out why time is doing that
//write function so that save button stores to local storage

