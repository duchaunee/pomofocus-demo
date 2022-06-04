
// init MINUTE, SECOND pomodoro
var MINUTE, SECOND, TIMEOUT;
MINUTE = 25;
SECOND = 00;

var timer = document.querySelector('.timer');
var minute = document.getElementById('minute');
var second = document.getElementById('second');
var btnStarts = document.querySelectorAll('.btn__start');

var btnStart = btnStarts[0];
var btnStop = btnStarts[1];

//start btn
btnStart.addEventListener('click', () => {
    // playSound();
    start();
    btnStart.classList.add('hide');
    btnStop.classList.remove('hide');
})

//stop btn
btnStop.addEventListener('click', () => {
    // playSound();
    stop();
    btnStop.classList.add('hide');
    btnStart.classList.remove('hide');
})


function start() {
    
    if (SECOND == 00) {
        MINUTE--;
        SECOND = 59;
    }

    if (MINUTE === -1) {
        clearTimeout(TIMEOUT);
        alert('duchau said: HẾT GIỜ RỒI BÉ ƠII!');
    }

    console.log(MINUTE.toString().length, SECOND.toString().length)

    if (MINUTE.toString().length == 1) {
        timer.innerHTML = `0${MINUTE}:${SECOND}`;
    }
    else if (SECOND.toString().length == 1) {
        timer.innerHTML = `${MINUTE}:0${SECOND}`;
    }
    else timer.innerHTML = `${MINUTE}:${SECOND}`;

    TIMEOUT = setTimeout( () => {
        SECOND--;
        start();
    }, 1000);
}

function stop() {
    clearTimeout(TIMEOUT);
}


// function playSound() {
//     var sound = document.getElementById("audio");
//     sound.play();
// }