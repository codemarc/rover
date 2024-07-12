const readline = require('readline');
const Rover = require('./rover');

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