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

    rl.question('Please enter timer duration FOR WORK in minutes! ', (minutes1) => {
      var time = parseInt(minutes1, 10) * 60;
      startTimer(time);
      console.log(`Work Time: ${minutes1}`)
    });

    rl.question('Please enter timer duration FOR BREAK in minutes! ', (minutes2) => {
      var time = parseInt(minutes2, 10) * 60;
      startTimer(time);
      console.log(`Break Time: ${minutes2}`)
    });