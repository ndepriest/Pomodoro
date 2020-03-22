const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function minTommss(minutes) {
  setInterval(function () {
  var sign = minutes < 0 ? "-" : "";
  var min = Math.floor(Math.abs(minutes));
  var sec = Math.floor((Math.abs(minutes) * 60) % 60);

  console.log(sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec);

  }, 1000);
}


rl.question('Please enter timer duration in minutes!', (min) => {
  // var time = parseInt(min, 10) * 60;
  minTommss(min);

  rl.close();
});