var JohFirst=97;
var JohnSecond=134;
var JohnThird = 105;
var JohnAvg = (JohFirst+JohnSecond+JohnThird)/3;

var MarkFirst = 97;
var MarkSecond = 134;
var MarkThird = 105;
var MarkAvg = (MarkFirst+MarkSecond+MarkThird)/3;

var MaryFirst = 97;
var MarySecond = 134;
var MaryThird = 105;
var MaryAvg = (MaryFirst+MarySecond+MaryThird)/3;

console.log('-----------2. challenge---------');
console.log('John\'s avg: ' + JohnAvg.toFixed(2));
console.log('Mark\'s avg: ' + MarkAvg.toFixed(2));
console.log('Mary\'s avg: ' + MaryAvg.toFixed(2));


if(JohnAvg > MarkAvg && JohnAvg>MaryAvg){
    console.log('John\'s team win the tour with ' + JohnAvg.toFixed(2) +' points ');
} else if(MarkAvg > JohnAvg && MarkAvg > MaryAvg){
    console.log('Mark\'s team win the tour with ' + MarkAvg.toFixed(2) +' points ');
} else if(MaryAvg > JohnAvg && MaryAvg > MarkAvg){
    console.log('Mary\'s team win the tour with ' + MaryAvg.toFixed(2) +' points ');
} else {
    console.log('DRAW');
}

