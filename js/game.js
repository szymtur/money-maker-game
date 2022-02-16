import Coin from './coin.js';
import Furry from './furry.js';

/*
    Game Constructor
*/

class Game {
    constructor() {
        this.board = document.querySelectorAll('#game_board div');
        this.scoreDisplay = document.querySelector('#counter');
        this.startButton = document.querySelector('#start');
        this.gameOverCaption = document.querySelector('#over');

        this.coinSound = new Audio('sounds/coin.wav');
        this.furry = new Furry();
        this.coin = new Coin();

        this.score = 0;
    }

    /* converting Furry's position from x and y (0-9) to the board field number (0-99) */
    index(x, y) {
        return x + (y * 10);
    };

    /* shows Furry on the board */
    showFurry() {
        const furryPosition = this.index(this.furry.x, this.furry.y);

        if (this.board[furryPosition]) {
            this.board[furryPosition].classList.add('furry');
        }
    };

    /* shows coin on the board */
    showCoin() {
        this.coin.newPosition();

        if (this.board[this.coin.position]) {
            this.board[this.coin.position].classList.add('coin');
        }
    };

    /* Furry's movement */
    moveFurry() {
        if (this.furry.direction === 'right') {
            this.furry.x = this.furry.x + 1;
        }
        else if (this.furry.direction === 'left') {
            this.furry.x = this.furry.x - 1;
        }
        else if (this.furry.direction === 'up') {
            this.furry.y = this.furry.y + 1;
        }
        else if (this.furry.direction === 'down') {
            this.furry.y = this.furry.y - 1;
        }

        this.hideVisibleFurry();
        this.showFurry();
        this.checkCoinCollision();
        this.checkGameOver();
    };

    /* keyboard handling */
    turnFurry(event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'down';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'up';
                break;
        }
    };

    /* removes Furry's clones from the board */
    hideVisibleFurry() {
        const visibleFurry = document.querySelector('.furry');

        if (visibleFurry) {
            visibleFurry.classList.remove('furry');
        }
    };

    /* removes a coin from the board */
    hideVisibleCoin() {
        this.board[this.coin.position].classList.remove('coin');
    };

    /* coin collision handling */
    checkCoinCollision() {
        if (this.coin.position === this.index(this.furry.x, this.furry.y)) {

            this.coinSound.play().then(() => {
                this.score++;
                this.scoreDisplay.innerText = this.scoreFormat(this.score);
                console.log('bang');
            });

            this.hideVisibleCoin();
            this.showCoin();
        }
    };

    /* makes three-digit score format */
    scoreFormat(score) {
        if (score.toString().length === 1) {
            return `00${score}`;
        }

        if (score.toString().length === 2) {
            return `0${score}`;
        }

        return score;
    };

    /* shows "game over" caption */
    showGameOverCaption() {
        this.gameOverCaption.classList.remove('invisible');
    };

    /* hides "game over" caption */
    hideGameOverCaption() {
        this.gameOverCaption.classList.add('invisible');
    };

    /* activates the "start game" button */
    enableStartButton() {
        this.startButton.disabled = false;
    };

    /* deactivates the "start game" button */
    disableStartButton() {
        this.startButton.disabled = true;
    };

    /* game over - when Furry collides edge of the game board */
    checkGameOver() {
        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            console.log('game over');
            clearInterval(this.setIntervalId);

            this.hideVisibleFurry();
            this.hideVisibleCoin();
            this.showGameOverCaption();
            this.enableStartButton();
        }
    };

    /* starts the game */
    startGame() {
        this.setIntervalId = setInterval(() => this.moveFurry(), 350);
        this.scoreDisplay.innerText = this.scoreFormat(this.score);

        this.hideGameOverCaption();
        this.disableStartButton();
    };
}

export default Game;