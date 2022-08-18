
let weeklyView = document.getElementById('weeklyView');
let dailyView = document.getElementById('dailyView');
let monthlyView = document.getElementById('monthlyView')

let day = document.getElementById('day')
let week = document.getElementById('week')
let month = document.getElementById('month')


dailyView.style.display = "none"
monthlyView.style.display = "none"
weeklyView.style.display = ""


day.addEventListener('click',showDaily)
week.addEventListener('click',showWeekly)
month.addEventListener('click',showMonthly)

function showDaily(){

    weeklyView.style.display = "none"
    dailyView.style.display = ""
    monthlyView.style.display = "none"
}

function showWeekly(){

    weeklyView.style.display = ""
    dailyView.style.display = "none"
    monthlyView.style.display = "none"
}

function showMonthly(){

    weeklyView.style.display = "none"
    dailyView.style.display = "none"
    monthlyView.style.display = ""
}
