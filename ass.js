function updateTime() {
  const timeElement = document.getElementById('temp');
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const timeString = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();


var sec=0
var min=0
var hr=0

var interval

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start(){
    watch()
     interval=setInterval(watch, 1000)
}
function pause(){
    clearInterval(interval)
}
function stop(){
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById("nmr").innerText= "00:00:00"
}



function watch(){
    sec++
    if(sec == 60){
        min++
        sec=0
        if(min == 60){
            min=0
            hr++
        }
    }
    document.getElementById("nmr").innerText=twoDigits(hr)+":"+twoDigits(min)+":"+twoDigits(sec)
}