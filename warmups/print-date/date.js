var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var hour = (d.getHours() % 12 < 10) ? "0" + (d.getHours() % 12)  : (d.getHours() % 12);
var minute = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
var second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
var ampm = d.getHours < 12 ? "AM" : "PM";
console.log("Today is: " + weekday[d.getDay()]);
console.log("Current time is: " + hour + ":" + minute + ":" + second + " " + ampm);