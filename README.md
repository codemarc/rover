# Rover 

### prompt
Create a command line app that prompts for commands and moves a rover around a 2D plane.
The rover should point in a direction, turn to face different directions, and move in the direction it is facing.

### test and run

> To install packages  
$ yarn install 


> To run the rover  
$ yarn start


> To run the unit tests  
$ yarn test


---

```bash
marc:~/rover$ yarn
yarn install v1.22.22
warning package.json: No license field
warning rover@1.0.0: No license field
[1/4] 🔍  Resolving packages...
success Already up-to-date.
✨  Done in 0.18s.
marc:~/rover$ yarn test
yarn run v1.22.22
warning package.json: No license field
$ jest
 PASS  ./rover.test.js
  Rover
    ✓ initializes with correct starting position and direction (3 ms)
    ✓ turns left correctly (1 ms)
    ✓ turns right correctly (1 ms)
    ✓ moves forward correctly (1 ms)
    ✓ returns correct status (1 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        0.239 s, estimated 1 s
Ran all test suites.
✨  Done in 0.86s.
marc:~/rover$ yarn start
yarn run v1.22.22
warning package.json: No license field
$ node cli.js
Welcome to the Rover Control System!
Commands: 'L' (turn left), 'R' (turn right), 'M' (move), 'S' (status), 'Q' (quit)
Enter command: L
Turned left.
Enter command: L
Turned left.
Enter command: S
Position: (0, 0), Facing: S
Enter command: M
Moved forward.
Enter command: S
Position: (0, -1), Facing: S
Enter command: q
Goodbye!
✨  Done in 20.55s.
marc:~/rover$ 
```