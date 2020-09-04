/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. 
(Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. 
(Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. 
(Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
*/


var scores, roundScore, activePlayer, dice, dice2, gamePlaying,   dicelist0, dicelist1, maxPoint;

//clear the table
init();

gamePlaying = true;


//dice button
document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){

        //random number
        var dice = Math.floor(Math.random()*(6-1+1)+1);
        var dice2 = Math.floor(Math.random()*(6-1+1)+1);

        console.log(maxPoint);
        //display result
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';

        document.querySelector('.dice2').style.display = 'block';
        document.querySelector('.dice2').src = 'dice-' + dice2 + '.png';

        console.log(dice);
        console.log(dice2);

        //update the round score if the rolled number was not 1
        if(dice === 6 && dice2 === 6 ){
             
            scores[activePlayer] = 0;
            previousRoll = 0;
            roundScore = 0;
            alert("Two 6, you lost ALL YOUR points!");
            document.querySelector('#current-' + activePlayer).textContent = 0;
            document.querySelector('#score-' + activePlayer).textContent = 0;
            
            nextPlayer();
         }
        else if(dice === 1 || dice2 === 1) {
            alert("Roll: "+dice+" and "+ dice2 +", you lost your CURRENT points!");
            previousRoll = 0;
            
            
            nextPlayer();
        } else {
            //calculate roundscore
            roundScore += (dice + dice2);
            //add roundscore to the dom
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            previousRoll = dice;
            
           

        }
    } 
});

//hold button
document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        
        //add roundscore to global scores
        scores[activePlayer] += roundScore;

        //add global score to the dom
        document.querySelector('#score-' +activePlayer).textContent = scores[activePlayer];

        //check if the player won the game
        if(scores[activePlayer]>=maxPoint){
            document.querySelector('#name-'+ activePlayer).textContent = 'WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
  
            document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');

            gamePlaying = false;
        } else {
            //next player
            nextPlayer();
        }
    }
});

//new game button
document.querySelector('.btn-new').addEventListener('click', init);



function nextPlayer(){
    //change active player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // null roundscore
    roundScore = 0;
    // add null roundscore to the dom
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
 
    //change active player background
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
}

function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    dicelist0 = [];
    dicelist1 = [];

    
    //hide dice
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';


    //set 0 all elements
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    

    //set Players name
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    //remove winner class
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    //remove both active class
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    //add active class to player1
    document.querySelector('.player-0-panel').classList.add('active');

    setMaxPoint();

}




function setMaxPoint(){
    let maxPointByUser = prompt("Please set the maximum point", "100");
    if(isNaN(maxPointByUser) ){
        maxPoint = 100;
    } else {
        maxPoint = maxPointByUser;
    }
    document.getElementById('maxPoint').textContent = maxPoint;
    console.log(maxPoint);
}


