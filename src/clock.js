// const now = require("../lib/time.js");

const showtime = function() {
    document
        .getElementById("clock")
        .innerHTML = "Current time is " + now().split(",")[1];
}

showtime()
