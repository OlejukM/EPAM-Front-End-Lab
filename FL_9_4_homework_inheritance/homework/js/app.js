//Task 2
let coordinatesObject = {
    x: this.x,
    y: this.y
};

function Bot(name, speed, x, y) {
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
}

Bot.prototype.getSpeed = function () {
    return this.speed;
}

Bot.prototype.setSpeed = function (speed) {
    this.speed = speed;
}

Bot.prototype.getCoordinates = function () {
    return coordinatesObject;
}

Bot.prototype.setCoordinates = function (x, y) {
    this.x = x;
    this.y = y;
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
            console.log('Where the hell u wanna go ?');
    }
}

Bot.prototype.showPosition = function () {
    console.log(`I am Bot ${this.name}. I am located at ${this.x}:${this.y}`);
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
Botty.showPosition(); // I am Bot 'Betty'. I am located at -2:9.
Botty.getCoordinates();
Botty.setSpeed(10);