const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function minTommss(duration) {
  var intervalId = setInterval(function () {
    if (duration >= 0) {
      var min = Math.floor(duration / 60);
      var sec = Math.floor(duration % 60);

      console.log((min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec);

      --duration;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}


rl.question('Please enter timer duration in minutes!', (min) => {
  minTommss(min * 60);

  rl.close();
});

