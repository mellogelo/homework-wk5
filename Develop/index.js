var date = new Date();
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();
var currentHour = date.getHours();
var currentMinute = date.getMinutes();
var currentSecond = date.getSeconds()

//currentMonth has values 1-12, currentDay has values 1-31, currentHour... etc.
console.log(currentMonth, currentDay, currentHour, currentMinute, currentSecond)
