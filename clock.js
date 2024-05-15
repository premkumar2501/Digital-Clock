let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')

let fullDate = new Date()
let day = fullDate.getDate()
let toMonth = fullDate.getMonth()
let toYear = fullDate.getFullYear()
let today = fullDate.getDay()

date.innerHTML = day
if (toMonth < 10) {
    toMonth = '0' + toMonth
    month.innerHTML = toMonth
}
else {
    month.innerHTML = toMonth
}
year.innerHTML = toYear

let hour = document.getElementById('hour')
let minute = document.getElementById('minute')
let second = document.getElementById('second')
let colan = document.getElementById('colan')
let colan1 = document.getElementById('colan1')

function timer() {
    fullTime = new Date()
    let toHour = fullTime.getHours()
    let toMinute = fullTime.getMinutes()
    let toSecond = fullTime.getSeconds()

    toHour = toHour < 10 ? '0' + toHour : toHour
    toMinute = toMinute < 10 ? '0' + toMinute : toMinute
    toSecond = toSecond < 10 ? '0' + toSecond : toSecond

    if (toSecond % 2 === 0) {
        colan.style.color = 'black'
        colan1.style.color = 'black'
    }
    else{
        colan.style.color = 'red'
        colan1.style.color = 'red'
    }

    hour.innerHTML = toHour
    minute.innerHTML = toMinute
    second.innerHTML = toSecond
}
setInterval(timer, 1000)

let sunday = document.getElementById('sunday')
let monday = document.getElementById('monday')
let tuesday = document.getElementById('tuesday')
let wednesday = document.getElementById('wednesday')
let thusday = document.getElementById('thusday')
let friday = document.getElementById('friday')
let saterday = document.getElementById('saterday')

today = today === 0 ?  sunday.style.backgroundColor = 'red' : 
        today === 1 ? monday.style.backgroundColor = 'red' :
        today === 2 ? tuesday.style.backgroundColor = 'red' :
        today === 3 ? wednesday.style.backgroundColor = 'red' :
        today === 4 ? thusday.style.backgroundColor = 'red' :
        today === 5 ? friday.style.backgroundColor = 'red' :
        today === 6 ? saterday.style.backgroundColor = 'red' : null

let am = document.getElementById('am')
let pm = document.getElementById('pm')

if ( hour < 12){
    am.style.backgroundColor = 'red'
}else{
    pm.style.backgroundColor = 'red'
}
    




