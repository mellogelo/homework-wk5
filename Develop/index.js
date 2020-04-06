var date = new Date();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds()
var test = moment().format('dddd');

// var task = localStorage.getItem("task")

//currentMonth has values 1-12, currentDay has values 1-31, currentHour... etc.
console.log(date, currentMonth, currentDay, currentHour, currentMinute, currentSecond)
console.log(test)

$(document).ready(function () {
    //load settings
    imgSaveIcon();
    updateDate();
    loadTasks();

// click function for saving
$(".btn").on("click", function() {
    event.preventDefault();
    dailyTaskInput();
});

//function for saving input value to local storage
function dailyTaskInput() {
    localStorage.task9am = $('#task-9am').val();
    localStorage.task10am = $('#task-10am').val();
    localStorage.task11am = $('#task-11am').val();
    localStorage.task12pm = $('#task-12pm').val();
    localStorage.task1pm = $('#task-1pm').val();
    localStorage.task2pm = $('#task-2pm').val();
    localStorage.task3pm = $('#task-3pm').val();
    localStorage.task4pm = $('#task-4pm').val();
    localStorage.task5pm = $('#task-5pm').val();
}

// function to load local storage data
function loadTasks() {
    $('#task-9am').val(localStorage.task9am);
    $('#task-10am').val(localStorage.task10am);
    $('#task-11am').val(localStorage.task11am);
    $('#task-12pm').val(localStorage.task12pm);
    $('#task-1pm').val(localStorage.task1pm);
    $('#task-2pm').val(localStorage.task2pm);
    $('#task-3pm').val(localStorage.task3pm);
    $('#task-4pm').val(localStorage.task4pm);
    $('#task-5pm').val(localStorage.task5pm);
}

});

// adding current date to the header

function updateDate() {
    $("#currentDay").append(date)
}

// add save icon to buttons

// Function for changing color when time passes, is present and for