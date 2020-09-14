(function(){
var Question = function(question, answears, rightAnswear){
    this.question = question;
    this.answears = answears;
    this.rightAnswear = rightAnswear;   
}

var questionHungary = new Question('What is Hungary\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 3);
var questionGreatBritann = new Question('What is Great Britann\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 0);
var questionGreece = new Question('What is Greece\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 2);
var questionTurkey = new Question('What is Turkey\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 1);

var questionsArr = [questionGreatBritann, questionGreece, questionTurkey, questionHungary];
/*questionsArr.push(questionHungary);
questionsArr.push(questionGreatBritann);
questionsArr.push(questionGreece);
questionsArr.push(questionTurkey);*/
var score = 0;

function randomQuestion(arr){
    var randomNumber = Math.floor(Math.random()*arr.length);
    writeQuestion(arr, randomNumber);

    var answear = prompt(arr[randomNumber].question + "\nType exit to quit");
    var correct = arr[randomNumber].rightAnswear;

    checkAnswear(answear, correct);
    
}

function writeQuestion(arr, randomNumber){ 
    console.log(arr[randomNumber].question);
    for(var i=0; i<arr.length; i++){
        console.log(i + ": " + arr[randomNumber].answears[i]);
    }
}

function displayScore(score){
    console.log('YOUR SCORE: ' + score);
    console.log('----------------------');
}

function checkAnswear(answear, correct){
    if(answear == correct){
        console.log('----------------------');
        console.log('CORRECT ANSWEAR');
        score = score + 1;
        displayScore(score);
        newquestion();
    } else if(answear === 'exit'){
        console.log('----------------------');
        console.log('GAME END');
        displayScore(score);
    } else {
        console.log('----------------------');
        console.log('WRONG ANSWEAR');
        displayScore(score);
        newquestion();
    }
}

function newquestion(){
    randomQuestion(questionsArr);
};

newquestion();

})();
