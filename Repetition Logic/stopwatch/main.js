let hr=0;
let min=0;
let sec=0;

let secs=document.getElementById('sec');
let mins=document.getElementById('min');
let hrs=document.getElementById('hr');
let timeId=null;
 function startWatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
   secs.innerHTML=(sec+0<10?"0":"")+sec; 
   mins.innerHTML=(min+0<10?"0":"")+min;
   hrs.innerHTML=(hr+0<10?"0":"")+hr;
   
}
function WatchStart(){
 timeId=setInterval(startWatch,1000);
}
function WatchStop(){
   clearInterval(timeId);   
}
function WatchClear(){
   clearTimeout(timeId);
   hr = 0; 
   min = 0; 
   sec = 0; 
   secs.innerHTML = "00"; 
   mins.innerHTML = "00"; 
   hrs.innerHTML = "00"; 
}
