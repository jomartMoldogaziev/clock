let date = new Date()



let clock = () => {
    let date = new Date()
    let year = date.getFullYear()
    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
    // !get-деген (получить)

    if(hours<9)hours="0"+hours
    if (minutes< 9)minutes  = '0' + minutes
    if (second < 10) second = '0' + second
    let years = [2024]
    let month = ["январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]
    // console.log(year)

    let date_time = hours+":"+minutes+":"+second
    let date_time2 = day + '-' + month[month_num]+","+" " + year

// console.log(date_time)
let element = document.getElementById('time').innerHTML = date_time
let element2 = document.getElementById('date').innerHTML = date_time2
// ?!Ушул устунку элементтер менен документтен иштетебиз
// console.log(element)
setTimeout(()=>{
    clock()
},1000);
// !1000-1секунд бар
}
clock()