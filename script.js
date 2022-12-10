'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let maxScore = 20;
let highScore = 0;


const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;

}
//onWay for defining function 
// document.querySelector('.check').addEventListener('click', checkGuess);

// function checkGuess() {
//     const guess = Number(document.querySelector('.guess').value);
//     if (!guess) {
//         document.querySelector('.message').textContent = '🚫 No Number Entered';
//     }
// }

//another way of defining function with eventListening
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        displayMessage('🚫 No Number Entered');
    } else if (guess !== secretNumber) {
        if (maxScore > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
            maxScore--;
            document.querySelector('.score').textContent = maxScore;
        } else {
            displayMessage('😒 You have lost the game')
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        highScore = maxScore > highScore ? maxScore : highScore;
        document.querySelector('.highscore').textContent = highScore;
    }
})

function reloadGame() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    maxScore = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.background = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = maxScore;
    document.querySelector('.guess').value = '';
}