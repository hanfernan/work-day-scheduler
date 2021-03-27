//variables
var container = $('.row');
var timeOfDay = ["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
var saveBtnEl
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
//dynamically create the schedule rows inside a for loop
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

//write function so that save button stores to local storage


//write if else statement incorporating moment to get time to change color

//if (timeOfDay[i] === momentTimeHour){
    //timeBlockEl.addClass('present');
//}else if (timeOfDay[i] < momentTimeHour){
    //timeBlockEl.addClass('past');
//}else (timeOfDay[i] > momentTimeHour){
    //timeBlockEl.addClass('future');
//}

//define momentTimeHour

//figure out why the rows be doin' that