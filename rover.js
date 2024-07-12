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

module.exports = Rover;