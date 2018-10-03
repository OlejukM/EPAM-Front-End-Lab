//Task 2
function Bot(name, speed, x, y) {
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
}

Bot.prototype.setSpeed = function (speed) {
    this.speed = speed;
}

Bot.prototype.getSpeed = function () {
    return `Current speed is ${this.speed}`;
}

Bot.prototype.setCoordinates = function (x, y) {
    this.x = x;
    this.y = y;
}

Bot.prototype.getCoordinates = function () {
    let obj = {
        x: this.x,
        y: this.y
    };
    return obj;
}

Bot.prototype.move = function (position) {
    switch (position) {
        case 'up':
            this.y += this.speed;
            break;
        case 'down':
            this.y -= this.speed;
            break;
        case 'left':
            this.x -= this.speed;
            break;
        case 'right':
            this.x += this.speed;
            break;
        default:
            console.log('Where the hell you wanna go ?');
    }
}

Bot.prototype.showPosition = function () {
    return `I am ${this.constructor.name} ${this.name}. I am located at ${this.x}:${this.y}`;
}

let Botty = new Bot('Betty', 2, 0, 1);
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:1.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at 0:3.
Botty.move('left');
Botty.move('down');
Botty.move('up');
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:5.
Botty.move('up');
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:7.
Botty.move('up');
console.log(Botty.showPosition()); // I am Bot 'Betty'. I am located at -2:9.
Botty.getCoordinates(); // {x: -2, y: 9}.
Botty.setSpeed(13);
Botty.getSpeed(); // Current speed is 13.

function Racebot(name, speed, x, y) {
    Bot.call(this, name, speed, x, y);
}

Racebot.prototype = Object.create(Bot.prototype);
Racebot.prototype.constructor = Racebot;
let Zoom = new Racebot('Lightning', 2, 0, 1);