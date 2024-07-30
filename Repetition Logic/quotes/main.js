let hrs=document.getElementById('hr');
let mins=document.getElementById('min');
let secs=document.getElementById('sec');


setInterval(function(){
    let currnet=new Date();
    hrs.innerHTML=(currnet.getHours()+0<10?"0":"")+currnet.getHours();
    mins.innerHTML=(currnet.getMinutes()+0<10?"0":"")+currnet.getMinutes();
    secs.innerHTML=(currnet.getSeconds()+0<10?"0":"")+currnet.getSeconds();
   
})
let quotes=document.getElementById('quote');
let Current=0;
let quotesIndex=["“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”","“A room without books is like a body without a soul.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“A friend is someone who knows all about you and still loves you.”"
]
function slide(){
    quotes.innerHTML=quotesIndex[Current];
    Current=(Current+1)%quotesIndex.length;
    
}
setInterval(slide,3000);
