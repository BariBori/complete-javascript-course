var JohnMass = 97;
var JohnHeight = 1.86;
var MarkMass = 79;
var MarkHeight = 1.78;
var JohnBMI = JohnMass /(JohnHeight * JohnHeight);
var MarkBMI = MarkMass /(MarkHeight * MarkHeight);

var MarkBMIHigher = MarkBMI > JohnBMI;

console.log("Is Mark BMI higher than John's? " + MarkBMIHigher);