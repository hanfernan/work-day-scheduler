//variables
var container = $('.row');
var timeOfDay = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];

for (var i = 0; i < timeOfDay.length; i++) {
    //create div .hour
    var timeOfDayEl = $('<div>');
    //add content to element
    timeOfDayEl.text(timeOfDay[i]);
    //add class to element
    timeOfDayEl.addClass('hour');
    //append to container
    container.append(timeOfDayEl);

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


//event listeners

//save button stores to local storage
//if else statement incorporating moment to get time to change color
//append today's date to header with moment.js