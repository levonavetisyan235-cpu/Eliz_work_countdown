var dateEnd = new Date("2026-07-01T15:00:00")
    dateNow = new Date()
    data = Math.floor((dateEnd.getTime() - dateNow.getTime()) / 1000);

function countdown() {
    var dataleft = 0;
    document.getElementById("days").innerHTML = Math.floor(data / 86400);
    dataleft = data % 86400;
    document.getElementById("hours").innerHTML = Math.floor(dataleft / 3600);
    dataleft = dataleft % 3600;
    document.getElementById("minutes").innerHTML = Math.floor(dataleft / 60);
    dataleft = dataleft % 60;
    document.getElementById("seconds").innerHTML = Math.floor(dataleft);
    data--;
}
setInterval(countdown, 1000);   
    

