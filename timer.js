var timer =0;
var timerInterval;

var min = document.getElementById("minute");
var sec = document.getElementById("second");
var millisec = document.getElementById("millisecond");

    function start(){
        stop()
    timerInterval = setInterval(function(){
        timer +=1/60;
        msVal = Math.floor((timer - Math.floor(timer))*1000);
        secondsVal = Math.floor(timer) - Math.floor(timer/60)*60;
        minuteVal = Math.floor(timer /60);


        min.innerHTML= minuteVal < 10 ? "0" +minuteVal.toString() :minuteVal 
        sec.innerHTML= secondsVal < 10 ? "0" +secondsVal.toString():secondsVal    
        millisec.innerHTML =msVal < 10 ? "0" + msVal.toString() :msVal
    }, 1000/60

       
    
    )
 
}
function stop(){
    clearInterval(timerInterval);
}

function reset(){

    h = document.getElementById("millisecond");
  
    h.innerHTML = "00";

    i= document.getElementById("second");
  
   i.innerHTML = "00";

   j= document.getElementById("minute");
  
   j.innerHTML = "00";


}