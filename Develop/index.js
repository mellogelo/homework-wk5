var date = new Date();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds()

// var task = localStorage.getItem("task")

//currentMonth has values 1-12, currentDay has values 1-31, currentHour... etc.
console.log(currentMonth, currentDay, currentHour, currentMinute, currentSecond)

$(document).ready(function () {
    //load settings
    loadTasks();

// click function for saving
$(".btn").on("click", function() {
    event.preventDefault();
    localStorage.task = $('#taskInput').val();
    // var task = document.getElementById('taskInput').value;
    // localStorage.setItem("task", task);
});

// function to load local storage data
function loadTasks() {
    $('#taskInput').val(localStorage.task);
}

});


// need fuction for storing to local data


// Function for changing color when time passes, is present and for