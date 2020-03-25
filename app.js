const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function countdown(duration) {
  return new Promise(function (resolve, reject) {
    var intervalId = setInterval(function () {
      if (duration >= 0) {
        var min = Math.floor(duration / 60);
        var sec = Math.floor(duration % 60);

        console.log((min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec);

        --duration;
      } else {
        clearInterval(intervalId);
        resolve();
      }
    }, 1000);
  });
}

let worktime = 0;
let breaktime = 0;

const question1 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter timer duration FOR WORK in minutes!', (workInput) => {
      worktime = workInput * 60;
      resolve();
    })
  })
}

const question2 = () => {
  return new Promise((resolve, reject) => {
    rl.question('Please enter timer duration FOR BREAK in minutes!', (breakInput) => {
      breaktime = breakInput * 60;
      resolve();
    })
  })
}

const main = async () => {
  while (true) {
    await question1();
    await question2();
    await countdown(worktime);
    console.log('BREAK TIME!');
    await countdown(breaktime);
    console.log('BACK TO WORK! Please enter time for work and break.');
  }
}

main();
