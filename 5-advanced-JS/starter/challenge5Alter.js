
function Question(question, answears, correct){
    this.question = question;
    this.answears = answears;
    this.correct = correct;
}

Question.prototype.displayQuestion = 
function(){
    console.log(this.question);

    for(i=0; i<this.answears.length; i++){
        console.log(i+ ": "+this.answears[i]);
    }
}

Question.prototype.checkAnswear = 
function(ans, scoreCounterFunction){
    var sc;
    if(ans === this.correct){
        console.log('CORRECT ANSWEAR');
        sc = scoreCounterFunction(true);
    } else {
        console.log('WRONG ANSWEAR');
        sc = scoreCounterFunction(false);
    }

    this.displayScore(sc);
}

Question.prototype.displayScore=
function(score){
    console.log('Your score is: ' + score);
    console.log('----------------------');
}

var q1 = new Question('What is Hungary\'s capital?', ['Ankara', 'Athens', 'London', 'Budapest', 'Rome', 'Lisbon'], 3);
var q2 = new Question('What is Great Britann\'s capital?', ['London', 'Ankara', 'Athens'], 0);
var q3 = new Question('What is Greece\'s capital?', [ 'Athens', 'London', 'Ankara', 'Stockholm', 'Budapest'], 2);
var q4 = new Question('What is Turkey\'s capital?', ['London', 'Ankara', 'Bucarest', 'Berlin','Athens', 'Budapest'], 1);

var questions = [q1, q2, q3, q4];


function countScore(){
    var score = 0;
    return function(correct){
        if(correct){
            score++;
        }
        return score;
    }
}

var keepScore = countScore();

function nextQuestion(){
    var randomNumber = Math.floor(Math.random()*questions.length);

    questions[randomNumber].displayQuestion();
    
    var answear = prompt(questions[randomNumber].question);

    if(answear !== 'exit'){
        questions[randomNumber].checkAnswear(parseInt(answear), keepScore);
        nextQuestion();
    } else {
        console.log('GAME END');
        console.log('Your final score is: ' + keepScore());
    }
}

nextQuestion();



