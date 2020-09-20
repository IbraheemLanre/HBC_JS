console.log("Script loaded");

// 1. Functional Programming Approach

// var hourArm = document.getElementById("hour");
// var minuteArm = document.getElementById("minute");
// var secondArm = document.getElementById("second");

// console.log(hourArm);
// console.log(minuteArm);
// console.log(secondArm);

// /*
// 1. Get the cureent time
// 2. Extract the hour, minute, second
// 3. Conveert hour, minute, second into angles that those arms need to be moved to from the point 0
// 4. Position those arms according to those calculations
// 5. Update their position every 1 second
//     a. Recalculate the angle of those arms every 1 second
//     b. Position those arms again to new calculation
//  */

// var now = new Date();
// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();

// console.log(`The time now is ${hour}:${minute}:${second}`);

// var alpha = 360 / 60; // second arm moves every sec
// var beta = 360 / 60; //minute arm moves every minute
// var delta = 360 / 12; //hour arm moves every hour

// // angle of the second arm
// var secondArmAngle = alpha * second;

// // angle of the minute arm
// var minuteArmAngle = beta * (minute + second / 60);

// // angle of the hour arm
// var hourArmAngle = delta * (hour + minute / 60 + second / 360);

// console.log(
//   `The time now is ${hourArmAngle}:${minuteArmAngle}:${secondArmAngle}`
// );

// secondArm.style.transform = `rotate(${secondArmAngle}deg)`;
// minuteArm.style.transform = `rotate(${minuteArmAngle}deg)`;
// hourArm.style.transform = `rotate(${hourArmAngle}deg)`;

// var secondArmOffset = alpha;
// var minuteArmOffset = alpha / 60;
// var hourArmOffset = alpha / 60 / 60;

// function updateArmPosition() {
//   secondArmAngle += secondArmOffset;
//   minuteArmAngle += minuteArmOffset;
//   hourArmAngle += hourArmOffset;
//   secondArm.style.transform = `rotate(${secondArmAngle}deg)`;
//   minuteArm.style.transform = `rotate(${minuteArmAngle}deg)`;
//   hourArm.style.transform = `rotate(${hourArmAngle}deg)`;
// }

//2. Objective Oriented Approach

var clock = {
  constants: {
    alpha: 360 / 60,
    beta: 360 / 60 / 60,
    delta: 360 / 12,
  },
  arms: {
    hour: document.getElementById("hour"),
    minute: document.getElementById("minute"),
    second: document.getElementById("second"),
  },
  now: {
    hour: null,
    minute: null,
    second: null,
  },
  angles: {
    hour: null,
    minute: null,
    second: null,
  },
  getNow: function () {
    var time = new Date();
    this.now.hour = time.getHours();
    this.now.minute = time.getMinutes();
    this.now.second = time.getSeconds();
  },
  getAngles: function () {
    this.angles.second = this.constants.alpha * this.now.second;
    this.angles.minute =
      this.constants.beta * (this.now.minute + this.now.second / 60);
    this.angles.hour =
      this.constants.delta *
      (this.now.hour + this.now.minute / 60 + this.now.second / 360);
  },
  positionClockArms: function () {
    this.arms.second.style.transform = `rotate(${this.angles.second}deg)`;
    this.arms.minute.style.transform = `rotate(${this.angles.minute}deg)`;
    this.arms.hour.style.transform = `rotate(${this.angles.hour}deg)`;
  },
  adjustAngles: function () {
    this.now.second++;
    this.getAngles();
    this.positionClockArms();
  },
  init: function () {
    this.getNow();
    this.getAngles();
    this.positionClockArms();
    setInterval(this.adjustAngles.bind(this), 1000);
    // var scope = this;
    // setInterval(function () {
    //   scope.adjustAngles();
    // }, 1000);
  },
};

clock.init();

// clock.getNow();
// clock.getAngles();
// clock.positionClockArms();
// setInterval(clock.adjustAngles.bind(clock), 1000);

// console.log(clock.now);
// console.log(clock.angles);
