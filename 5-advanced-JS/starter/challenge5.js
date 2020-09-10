var Question = function(question, answears, rightAnswear){
    this.question = question;
    this.answears = answears;
    this.rightAnswear = rightAnswear;
    
}

var questionHungary = new Question('What is Hungary\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 3);
var questionGreatBritann = new Question('What is Great Britann\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 0);
var questionGreece = new Question('What is Greece\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 2);
var questionTurkey = new Question('What is Turkey\'s capital?', ['London', 'Ankara', 'Athens', 'Budapest'], 1);

var questionsArr = [];
questionsArr.push(questionHungary);
questionsArr.push(questionGreatBritann);
questionsArr.push(questionGreece);
questionsArr.push(questionTurkey);
var score = 0;

function randomQuestion(arr){
    
    var randomNumber = Math.floor(Math.random()*4);
    console.log(arr[randomNumber].question);
    for(var i=0; i<arr.length; i++){
        console.log(i + ": " + arr[randomNumber].answears[i]);
    }
    var answear = prompt(arr[randomNumber].question);
    if(answear == arr[randomNumber].rightAnswear){
        console.log('Correct');
        score = score + 1;
        console.log('Your score: ' + score);
        console.log('----------------------');
        newquestion();
    } else if(answear === 'exit'){
        console.log('Game end');
    } else {
        console.log('Wrong');
        console.log('Your score: ' + score);
        console.log('----------------------');
        newquestion();
    }
}

function newquestion(){
    randomQuestion(questionsArr);
};

newquestion();


