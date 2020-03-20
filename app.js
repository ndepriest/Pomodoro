const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startTimer(duration) {
  setInterval(function () {
    var minutes = parseInt(duration / 60, 10);
    var seconds = parseInt(duration % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    console.log(`Time Remaining: ${minutes}:${seconds}`);

    --duration;
  }, 1000);
}

rl.question('Please enter timer duration in minutes!', (minutes) => {
  var time = parseInt(minutes, 10) * 60;
  startTimer(time)

  rl.close();
});