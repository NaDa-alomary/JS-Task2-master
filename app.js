//Variables
let time = 0;
let timerId = 0;
let timerOut = true;

//Elements in a variable
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");
const Timer = document.querySelector("#time-display");



//use this function to start the timer
const initClock = () => {
    timerOut = false;
    timerId = setInterval (() => {
        time++;
        timerCount;
    }, 1000);
};

const timerCount = () => {
    const min = Math.floor(time / 60) ;
    const sec = time % 60 ;
    if (sec < 10){
        Timer.innerHTML = `${min}:0${sec}`;
    } else{
        Timer.innerHTML = `${min}:${sec}`;      
    }
};


const stopClock = () => {
    clearInterval(timerId);
};



// Start the timer
start.addEventListener("click" , function(){
    if (timerOut) {
    initClock();
    }
});

// stop and clear the timer
reset.addEventListener("click" , function(){
    stopClock();
    timerOut = true;
    time=0;
    timerCount();
});