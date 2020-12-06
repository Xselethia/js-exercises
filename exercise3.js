// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

(function () {

    setInterval(display, 1000);


    function display() {
        const today = new Date();
        const mm = today.getMonth() + 1;
        let dd = today.getDate();
        const yyyy = today.getFullYear();

        if (dd < 10) {
            dd = "0" + dd;
        }
        if (mm < 10) {
            mm = "0" + mm;
        }

        const hour = today.getHours();
        const min = today.getMinutes();
        let sec = today.getSeconds();
        let hourAmurican = 0;
        const pmAm = (hour >= 12) ? "PM"
            : "AM";

        sec = (sec < 10) ? "0" + sec : sec;
        hourAmurican = (hour > 12) ? hour - 12 : hour;

        hourAmurican = (hourAmurican < 10) ? "0" + hourAmurican : hourAmurican;

        const todayDate = `${dd}/${mm}/${yyyy}`;
        const todayUSAdate = `${mm}-${dd}-${yyyy}`;
        const timeAmurican = `${hourAmurican} ${pmAm}:${min}:${sec}`;
        const timeEu = `${hour}:${min}:${sec}`;

        document.getElementById("date2").innerHTML = `${todayDate} ${timeEu}`;
        document.getElementById("date3").innerHTML = `${todayUSAdate} ${timeAmurican}`;
    }

})()
