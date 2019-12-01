// Given:
// F = floor(M / 3) - 2
//
// Find the Fuel Required (F) for all of the given masses day01.txt

// let fs = require('fs');

/**
 * F = floor(M / 3) - 2
 * @param mass Mass of an object (module)
 */
function fuelFromMass(mass)
{
    return (Math.floor(mass / 3) - 2);
}