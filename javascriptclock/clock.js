let userName = prompt("Adınızı Giriniz");
userName=userName[0].toUpperCase()+userName.slice(1);
let greeting;
//userName=userName.split("").charAt(0).toUpperCase(0);
let input = document.querySelector("#myName");
input.innerHTML=`${userName}`

function showTime(){
    let day = new Date().getDay();
switch(day){
    case(1):
    day="Pazartesi";
    break
    case(2):
    day="Salı";
    break
    case(3):
    day="Çarşamba";
    break
    case(4):
    day="Perşembe";
    break
    case(5):
    day="Cuma";
    break
    case(6):
    day="Cumartesi";
    break
    case(7):
    day="Pazar";
    break
}
let sec= new Date().getSeconds();
let min= new Date().getMinutes();
let hour= new Date().getHours();
if(sec<10){
    sec= "0" + sec;
}
if(min<10){
    min = "0" + min;
}
if(hour<10){
    hour = "0" + hour;
}
setTimeout(showTime, 1000);

let clock = document.querySelector("#myClock");
clock.innerHTML = `${hour} : ${min} : ${sec}  ${day}`



}
showTime();