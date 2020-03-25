# **Node.js Pomodoro Timer**

This is a node.js pomodoro timer that asks for a user input work time and break time. The timer then counts down starting with the work time given. Once work time is finished the timer then alerts the user that it is now break time and then begins counting down respectively. Once the timer reaches zero the user is then notified that the break is over and the timer asks for a work time and break time once again. 

# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to run this app

- Node.js
- Terminal

## Installing

Run `npm install` to install all dependencies

# Running the Timer

Begin in the console with the command

>`node app.js`

You should now be prompted with the question

>`Please enter timer duration FOR WORK in minutes!`

Enter time desired, using `1.5`, `.75`, etc, works respectively. You will then be prompted with the break time question

>`Please enter timer duration FOR BREAK in minutes!`

Enter time just as above. The timer will now start counting down the work time duration until it reaches zero.  

It will then prompt the user with

 >`BREAK TIME!`

At this point the timer will begin to countdown the duration for break time.  

Finally as the timer reaches zero it will prompt the user that break time is over and the timer will ask again to enter the time for work and break

>`BACK TO WORK! Please enter time for work and break.`  
`Please enter timer duration FOR WORK in minutes!`

Example of what it should look like

![alt text](\static\images\pomodoro_running.png)

# Built With

- Node.js
- Javascript

# Authors

- Nathan DePriest
