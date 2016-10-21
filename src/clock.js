const now = require("../lib/time.js");

setInterval( function() {
    document.getElementById("clock").innerHTML = "Current time is " + now().split(",")[1];
}, 1000);
