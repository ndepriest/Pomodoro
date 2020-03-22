const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startTimer(duration) {
  setInterval(function () {
    if (duration >= 0) {
    var minutes = parseInt(duration / 60, 10);
    var seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`Time Remaining: ${minutes}:${seconds}`);

    --duration;
    } else {
      return;
    }
  }, 1000);
}

    rl.question('Please enter timer duration FOR WORK in minutes! ', (minutesOne) => {
      var time = parseInt(minutesOne, 10) * 60;
      startTimer(time);
      console.log(`Work Time: ${minutesOne}`)
    });

    rl.question('Please enter timer duration FOR BREAK in minutes! ', (minutesTwo) => {
      var time = parseInt(minutesTwo, 10) * 60;
      startTimer(time);
      console.log(`Break Time: ${minutesTwo}`)
    });