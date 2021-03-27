//define variables
var container = $('.row');
var hourContainer = [
    { hour: 9, period: "AM", milTime: 9 },
    { hour: 10, period: "AM", milTime: 10 },
    { hour: 11, period: "AM", milTime: 11 },
    { hour: 12, period: "PM", milTime: 12 },
    { hour: 1, period: "PM", milTime: 13 },
    { hour: 2, period: "PM", milTime: 14 },
    { hour: 3, period: "PM", milTime: 15 },
    { hour: 4, period: "PM", milTime: 16 },
    { hour: 5, period: "PM", milTime: 17 },
];
var today = moment();
var time = moment().format("HH");
var saveBtnEl
var timeBlockEl

//display today's date on the page in the header
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//create a function to generate the schedule each time the page refreshes
function generateSchedule() {
    for (var i = 0; i < hourContainer.length; i++) {
        //create div .hour and add class and content
        var hourEl = $('<div>').addClass('hour').text(hourContainer[i].hour + " " + hourContainer[i].period);
        //append to container
        container.append(hourEl);

        //create text area .time-block
        var timeBlockEl = $('<textarea>').addClass('time-block .description').text('');
        // timeBlockEl;
        container.append(timeBlockEl);

        //create save button .saveBtn that is attached to the index of each row
        var saveBtnEl = $('<button class="saveBtn" data-index="' + i + '">Save</button>');
        container.append(saveBtnEl);

        //write if else statement incorporating moment to get time to change color
        if (hourContainer[i].milTime < time) {
            timeBlockEl.addClass('past');
        } else if (hourContainer[i].milTime == time) {
            timeBlockEl.addClass('present');
        } else {
            timeBlockEl.addClass('future');
        }
    }
}

//call generateSchedule function so it will appear on page
generateSchedule();

