// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 3

(function () {
    const today = new Date();
    const day = today.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Cumartesi"]

    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();
    const pmAm = (hour >= 12) ? "PM"
        : "AM"
    document.getElementById("day").innerHTML = days[day];
    // document.getElementById("hour").innerHTML = hour;
    // document.getElementById("min").innerHTML = min;
    // document.getElementById("sec").innerHTML = sec;
    // document.getElementById("pmAm").innerHTML = pmAm;
    const myDate = hour + pmAm + ":" + min + ":" + sec;
    // const myDom = '<h1 id="gte">Galip Tolga</h1>';
    // document.getElementById("x").innerHTML = myDom

    setInterval(display, 1000);
})()

function display() {
    const today = new Date();
    let hour = today.getHours();
    const pmAm = (hour >= 12) ? "PM"
        : "AM"
    if (hour > 12) {
        hour = hour - 12
    }
    const min = today.getMinutes();
    const sec = today.getSeconds();
    document.getElementById("date").innerHTML = `${hour}${pmAm}:${min}:${sec}`;
    // console.log("Current Time : " + hour + pmAm + " : " + min + " : " + sec);
}
