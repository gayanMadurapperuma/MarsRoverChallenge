
# The Mars Rover Challenge

## Running Locally

Make sure you have [Node.js](https://nodejs.org/en/) installed.

```bash
git clone https://github.com/gayanMadurapperuma/MarsRoverChallenge
cd MarsRoverChallenge
```

### Installing

using [yarn](https://yarnpkg.com)
```bash
yarn
``` 

using npm
```bash
npm install
``` 

### Usage

The application accepts multiple rovers explore instruction along with upper-right coordinates.

* **Upper Right Cordinates** - combination of x and y co-ordinates
    * 5 5
* **Rover Position** - The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover’s orientation.
    * 1 2 N
* **Explore Instruction** - The possible letters are ‘L’, ‘R’ and ‘M’. ‘L’ and ‘R’ makes the rover spin 90 degrees left or right respectively, without moving from its current spot.
    * LMLMLMLMM
 
```bash
# using arguments
yarn start yarn start --input <upper-right-cordinates> [Rover-control-instructions] <Rover-Position> <explore-instruction>
```

### Example

```base
 yarn start --input '5 5' '1 2 N' 'LMLMLMLMM' '3 3 E' 'MMRMMRMRRM'
```

## License
[MIT](https://choosealicense.com/licenses/mit/)