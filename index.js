const commandLineArgs = require('command-line-args');

const optionDefinitions = [
    {name: 'input', multiple: true, type: String}
]

const options = commandLineArgs(optionDefinitions, { stopAtFirstUnknown: true, partial: true });

const {input: [maxCordinate, ...rest]} = options;

const roverPositionCalculation = (instructions, maxCordinate) => {
    const [roverPosition, roverInstruction, ...instructionOfOthers] = instructions;
    console.log(cordination(roverPosition.split(' '), roverInstruction, maxCordinate.split(' ')));
    if(instructionOfOthers.length > 0){
        roverPositionCalculation(instructionOfOthers, maxCordinate);
    }
}

const cordination = (currentPosition, instructions, maxCordinate) => {
    const cordinationCalculation = {
        N: [0, 1],
        E: [1, 0],
        S: [0, -1],
        W: [-1, 0]
    }
    const directions = ['N', 'E', 'S', 'W'];
    if(currentPosition.length > 3){
        return console.log('Rover position cordination incorrect');
    }
    let heading = currentPosition[2];
    let cordination = [parseInt(currentPosition[0]), parseInt(currentPosition[1])];
    let i = 0;
    while(i < instructions.length){
        switch(instructions[i]){
            case 'L': {
                heading = directions[directions.findIndex(e => e === heading) - 1] || directions[3];
                break;
            }
            case 'R': {
                heading = directions[directions.findIndex(e => e === heading) + 1] || directions[0]
                break;
            }
            case 'M': {
                const [xAxis, yAxis] = cordinationCalculation[heading];
                cordination = [cordination[0] + xAxis, cordination[1] + yAxis]
                break;
            }
        }
        i++;
    }
    if((cordination[0] > parseInt(maxCordinate[0]) || cordination[0] < 0) || (cordination[1] > parseInt(maxCordinate[1] || cordination[1] < 0))){
        return 'Rover is out of plateau';
    }
    return [...cordination, heading].join(' ');
}

roverPositionCalculation(rest, maxCordinate);