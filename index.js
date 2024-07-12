const readline = require('readline');

class Rover {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.direction = 'N';
        this.directions = ['N', 'E', 'S', 'W'];
    }

    turnLeft() {
        const currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex - 1 + 4) % 4];
    }

    turnRight() {
        const currentIndex = this.directions.indexOf(this.direction);
        this.direction = this.directions[(currentIndex + 1) % 4];
    }

    move() {
        switch (this.direction) {
            case 'N':
                this.y += 1;
                break;
            case 'E':
                this.x += 1;
                break;
            case 'S':
                this.y -= 1;
                break;
            case 'W':
                this.x -= 1;
                break;
        }
    }

    status() {
        return `Position: (${this.x}, ${this.y}), Facing: ${this.direction}`;
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const rover = new Rover();

console.log("Welcome to the Rover Control System!");
console.log("Commands: 'L' (turn left), 'R' (turn right), 'M' (move), 'S' (status), 'Q' (quit)");

function promptCommand() {
    rl.question("Enter command: ", (command) => {
        switch (command.toUpperCase()) {
            case 'L':
                rover.turnLeft();
                console.log("Turned left.");
                break;
            case 'R':
                rover.turnRight();
                console.log("Turned right.");
                break;
            case 'M':
                rover.move();
                console.log("Moved forward.");
                break;
            case 'S':
                console.log(rover.status());
                break;
            case 'Q':
                console.log("Goodbye!");
                rl.close();
                return;
            default:
                console.log("Invalid command. Please try again.");
        }
        promptCommand();
    });
}

promptCommand();

module.exports = Rover;