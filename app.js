const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const timetotravel = document.querySelector('.timetotravel')
const deadline = document.querySelector('.deadline')
const items = document.querySelectorAll('.deadline-format h4')

let futureDate = new Date(2024, 1, 8, 8, 0, 0)

const year = futureDate.getFullYear()
const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
month = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

timetotravel.textContent = `We will travel to paris in ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}0am`

// Future time in ms
const futureTime = futureDate.getTime()

function getRemainingTime(){
    const today = new Date().getTime()
    const t = futureTime - today
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60m
    // 1d = 24hr

    // values in ms
    const oneDay = 24 * 60 * 60 * 1000
    const oneHour = 60 * 60 * 1000
    const oneMinute = 60 * 1000

    // calculate all values
    let days= t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let minutes = Math.floor((t % oneHour) / oneMinute)
    let seconds = Math.floor((t % oneMinute) / 1000)

    // set values array

    const values = [days, hours, minutes, seconds]

    function format(item){
        if(item < 10){
            return item = `0${item}`
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })
    if(t < 0){
        clearInterval(countdown)
        deadline.innerHTML = `<h4 class="expired">Congrats! We probably already travelling right now</h4>`
    }

}
let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()