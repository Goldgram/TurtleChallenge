// Basic testing
const movesE1 = ['m', 'r', 'm', 'm', 'r', 'm', 'm', 'r', 'r', 'r', 'm', 'm']; //exit 1
const movesE2 = ['r', 'r', 'm', 'r', 'r', 'r', 'm', 'm', 'r', 'r', 'r', 'm', 'm', 'r', 'm', 'm', 'r', 'm', 'm', ]; // exit 2
const movesE3 = ['r', 'r', 'm', 'r', 'r', 'r', 'm', 'm', 'm', 'm', ]; // exit 3

console.log('Assert made it to Exit 1:', goTurtle(settings, movesE1) === 'Success');
console.log('Assert made it to Exit 2:', goTurtle(settings, movesE2) === 'Success');
console.log('Assert made it to Exit 3:', goTurtle(settings, movesE3) === 'Success');

const movesD1 = ['r', 'r', 'm', ]; // still in danger (1,3)
const movesD2 = ['m', 'r', 'm', 'm', 'm', 'm', ]; // still in danger (5,1)
const movesD3 = ['m', 'r', 'm', 'm', 'r', 'm', 'm', 'm', ]; // still in danger (3,4)

console.log('Assert still in danger 1:', goTurtle(settings, movesD1) === 'Still in danger');
console.log('Assert still in danger 2:', goTurtle(settings, movesD2) === 'Still in danger');
console.log('Assert still in danger 3:', goTurtle(settings, movesD3) === 'Still in danger');

const movesM1 = ['r', 'm', ]; // mine 1
const movesM2 = ['m', 'r', 'm', 'm', 'm', 'r', 'm', ]; // mine 2
const movesM3 = ['r', 'r', 'm', 'm', 'r', 'r', 'r', 'm', 'm', 'm', ]; // mine 3

console.log('Assert mine hit 1:', goTurtle(settings, movesM1) === 'Mine hit');
console.log('Assert mine hit 2:', goTurtle(settings, movesM2) === 'Mine hit');
console.log('Assert mine hit 3:', goTurtle(settings, movesM3) === 'Mine hit');

const movesO1 = ['m', 'm', ]; // out of bounds north
const movesO2 = ['r', 'r', 'r', 'm', ]; // out of bounds west
const movesO3 = ['r', 'r', 'm', 'r', 'r', 'r', 'm', 'r', 'm', 'm', ]; // out of bounds south
const movesO4 = ['m', 'r', 'm', 'm', 'm', 'm', 'm', ]; // out of bounds east

console.log('Assert out of bounds north:', goTurtle(settings, movesO1) === 'Out of bounds');
console.log('Assert out of bounds west:', goTurtle(settings, movesO2) === 'Out of bounds');
console.log('Assert out of bounds south:', goTurtle(settings, movesO3) === 'Out of bounds');
console.log('Assert out of bounds east:', goTurtle(settings, movesO4) === 'Out of bounds');
