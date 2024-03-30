let date1 = document.getElementById('date');
let month1 = document.getElementById('month');
let year1 = document.getElementById('year')


let date = new Date();
let toDate = date.getDate();
let toMonth = date.getMonth() + 1;
toMonth = toMonth < 10 ? '0' + toMonth : toMonth;

let toYear = date.getFullYear();
date1.innerText = toDate;
month1.innerText = toMonth;
year1.innerText = toYear;

let hours = document.getElementById("hr")
let mint = document.getElementById('min')
let sec = document.getElementById('sec')



function tym() {
    let currentTime = new Date()
    current = currentTime.getHours()
    minitue = currentTime.getMinutes()
    second = currentTime.getSeconds()

    minitue = minitue < 10 ? '0' + minitue : minitue;
    second = second < 10 ? '0' + second : second;

    hours.innerText = current;
    mint.innerText = minitue;
    sec.innerText = second;
}
setInterval(tym, 1000)

let currentDay = date.getDay();
let currentHour = date.getHours();

let sun = document.getElementById('sun')
let mon = document.getElementById('mon')
let tue = document.getElementById('tue')
let wed = document.getElementById('wed')
let thu = document.getElementById('thu')
let fri = document.getElementById('fri')
let sat = document.getElementById('sat')
let am = document.getElementById('am')
let pm = document.getElementById('pm')


if (currentHour < 12) {
    am.setAttribute('checked', 'checked');
}
else {
    pm.setAttribute('checked', 'checked');
}

switch (currentDay) {
    case 0:
        sun.setAttribute('checked', 'checked');
        break;
    case 1:
        mon.setAttribute('checked', 'checked');
        break;
    case 2:
        tue.setAttribute('checked', 'checked');
        break;
    case 3:
        wed.setAttribute('checked', 'checked');
        break;
    case 4:
        thu.setAttribute('checked', 'checked');
        break;
    case 5:
        fri.setAttribute('checked', 'checked');
        break;
    case 6:
        sat.setAttribute('checked', 'checked');
        break;
}   