var JohnMass = 97;
var JohnHeight = 1.86;
var MarkMass = 79;
var MarkHeight = 1.78;
var JohnBMI = (JohnMass /(JohnHeight * JohnHeight)).toFixed(2);
var MarkBMI = (MarkMass /(MarkHeight * MarkHeight)).toFixed(2);

var MarkBMIHigher = MarkBMI > JohnBMI;

console.log("---------1. challenge---------");
console.log("Mark's BMI: " + MarkBMI);
console.log("John's BMI: " + JohnBMI);
console.log("Is Mark's BMI higher than John's? " + MarkBMIHigher);
console.log("------------------");