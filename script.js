var score = 0;
var timerStartVal=60;
var hitRandomNum;


function makeBubble(){
    var clutter ="";
for(var i=1;i<=168;i++){
    var rn= Math.floor(Math.random()*10)
    clutter+=`<div class="bubble">${rn}</div>`
}

document.querySelector(".pbtm").innerHTML=clutter;
}
function runTimer(){
    var timerInt = setInterval(function(){
        if(timerStartVal>0){
            timerStartVal--;
            document.querySelector("#timerval").textContent=timerStartVal;
        }
        else{
            clearInterval(timerInt);
            document.querySelector(".pbtm").innerHTML=`<h1>GAME OVER!! Your Score is ${score}</h1>`;
        }
    },1000);

}
function randomHit(){
    hitRandomNum=Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent=hitRandomNum;
}
function increaseScore(){
    score +=10;
    document.querySelector("#scoreval").textContent = score;
}
//Event Bubbling
document.querySelector(".pbtm").addEventListener("click",function(details){
    var clickedNum = Number(details.target.textContent);
    if (clickedNum === hitRandomNum){
        increaseScore();
        randomHit();
        makeBubble();
    }
});

makeBubble();
runTimer();
randomHit();
