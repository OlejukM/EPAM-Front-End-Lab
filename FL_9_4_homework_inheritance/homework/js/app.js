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

Bot.prototype.setSpeed = function (newSpeed) {
    this.speed = newSpeed;
}

Bot.prototype.getCoordinates = function () {
    return coordinatesObject;
}

Bot.prototype.setCoordinates = function (newX, newY) {
    this.x = newX;
    this.y = newY;
}

Bot.prototype.move = function (position) {
    switch (position) {
        case 'up':
            this.y += 2;
            break;
        case 'down':
            this.y -= 2;
            break;
        case 'left':
            this.x -= 2;
            break;
        case 'right':
            this.x += 2;
            break;
        default:
            console.log('Where the hell u wanna go ?');
    }
}

Bot.prototype.showPosition = function () {
    console.log(`I am Bot ${this.name}. I am located at ${this.x}:${this.y}`);
}

let Botty = new Bot("Betty", 2, 0, 1);
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