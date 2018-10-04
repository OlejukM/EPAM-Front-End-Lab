//Task1
Object.prototype.assign = function (target) {
  if (target === null || target === undefined) {
    throw new TypeError('undefined and null have left this place and they will never come back, so do not ask them');
  }

  let obj = Object(target);

  for (let i = 0; i < arguments.length; i++) {
    let obj2 = arguments[i];

    if (obj2) {
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          obj[key] = obj2[key];
        }
      }
    }
  }

  return obj;
}

//Task 2
function Bot(name, speed, x, y) {
  this.name = name;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.defSpeed = speed;
}

Bot.prototype.setSpeed = function (speed) {
  this.speed = speed;
};

Bot.prototype.getSpeed = function () {
  return this.speed;
};

Bot.prototype.getDefaultSpeed = function () {
  return this.defSpeed;
};

Bot.prototype.setCoordinates = function (x, y) {
  this.x = x;
  this.y = y;
};

Bot.prototype.getCoordinates = function () {
  let obj = {
    x: this.x,
    y: this.y
  };
  return obj;
};

Bot.prototype.move = function (position) {
  switch (position) {
    case 'up':
      this.y += this.getSpeed();
      break;
    case 'down':
      this.y -= this.getSpeed();
      break;
    case 'left':
      this.x -= this.getSpeed();
      break;
    case 'right':
      this.x += this.getSpeed();
      break;
    default:
      console.log('Where the hell you wanna go ?');
  }
};

Bot.prototype.showPosition = function () {
  return `I am ${this.constructor.name} ${this.name}. I am located at ${
    this.x
  }:${this.y}`;
};

function Racebot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
  this.previousMove;
}
Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
Racebot.prototype.move = function (step) {
  if (step === this.getPreviousMove()) {
    this.setSpeed(this.getSpeed() + 1);
  } else {
    this.setSpeed(this.getDefaultSpeed());
  }
  switch (step) {
    case 'up':
      this.y += this.getSpeed();
      break;
    case 'down':
      this.y -= this.getSpeed();
      break;
    case 'left':
      this.x -= this.getSpeed();
      break;
    case 'right':
      this.x += this.getSpeed();
      break;
    default:
      console.log('Where the hell you wanna go ?');
  }
  this.setPreviousMove(step);
}
Racebot.prototype.getPreviousMove = function () {
  return this.previousMove;
}
Racebot.prototype.setPreviousMove = function (setMove) {
  this.previousMove = setMove;
}

function Speedbot(name, speed, x, y) {
  Bot.call(this, name, speed, x, y);
}
Speedbot.prototype = Object.create(Bot.prototype);
Speedbot.prototype.constructor = Speedbot;
Speedbot.prototype.prepareEngine = function () {
  this.setSpeed(this.getSpeed() + 2);
}

Speedbot.prototype.move = function (step) {
  Bot.prototype.move.call(this, step);
  if (this.getDefaultSpeed() < this.getSpeed()) {
    this.setSpeed(this.getSpeed() - 1);
  }
}

let Botty = new Bot('Betty', 2, 0, 1);
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:9.

let Broom = new Speedbot('Thunder', 2, 0, 1);
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:1.
Broom.move('up');
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at 0:3.
Broom.prepareEngine();
Broom.move('left');
Broom.move('down');
Broom.move('up');
Broom.move('up');
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:4.
Broom.move('up');
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:6.
Broom.move('up');
console.log(Broom.showPosition()); // I am Speedbot 'Thunder'. I am located at -4:8.

let Zoom = new Racebot('Lightning', 2, 0, 1);
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:1.
Zoom.move('up');
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at 0:3.
Zoom.move('left');
Zoom.move('down');
Zoom.move('up');
Zoom.move('up');
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:6.
Zoom.move('up');
console.log(Zoom.showPosition()) // I am Racebot 'Lightning'. I am located at -2:10.
Zoom.move('up');
console.log(Zoom.showPosition()); // I am Racebot 'Lightning'. I am located at -2:15