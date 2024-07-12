const Rover = require('./rover.js') // Assume the Rover class is in a file named rover.js

describe('Rover', () => {
  let rover

  beforeEach(() => {
    rover = new Rover()
  })

  test('initializes with correct starting position and direction', () => {
    expect(rover.x).toBe(0)
    expect(rover.y).toBe(0)
    expect(rover.direction).toBe('N')
  })

  test('turns left correctly', () => {
    rover.turnLeft()
    expect(rover.direction).toBe('W')
    rover.turnLeft()
    expect(rover.direction).toBe('S')
    rover.turnLeft()
    expect(rover.direction).toBe('E')
    rover.turnLeft()
    expect(rover.direction).toBe('N')
  })

  test('turns right correctly', () => {
    rover.turnRight()
    expect(rover.direction).toBe('E')
    rover.turnRight()
    expect(rover.direction).toBe('S')
    rover.turnRight()
    expect(rover.direction).toBe('W')
    rover.turnRight()
    expect(rover.direction).toBe('N')
  })

  test('moves forward correctly', () => {
    rover.move() // Move north
    expect(rover.x).toBe(0)
    expect(rover.y).toBe(1)

    rover.turnRight() // Face east
    rover.move()
    expect(rover.x).toBe(1)
    expect(rover.y).toBe(1)

    rover.turnRight() // Face south
    rover.move()
    expect(rover.x).toBe(1)
    expect(rover.y).toBe(0)

    rover.turnRight() // Face west
    rover.move()
    expect(rover.x).toBe(0)
    expect(rover.y).toBe(0)
  })

  test('returns correct status', () => {
    expect(rover.status()).toBe('Position: (0, 0), Facing: N')
    rover.move()
    rover.turnRight()
    rover.move()
    expect(rover.status()).toBe('Position: (1, 1), Facing: E')
  })
})