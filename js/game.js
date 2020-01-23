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
        this.furry = new Furry();
        this.coin = new Coin();
        this.coinSound = new Audio('sounds/coin.wav');
        this.score = 0;

        // metoda do przelicznia pozycji Furry'ego i monety z x i y (0-9) na numer pola tablicy (0-99)
        this.index = function (x, y) {
            return x + (y * 10);
        };

        // pokazuje Furry'ego na planszy
        this.showFurry = function () {
            this.hideVisibleFurry();
            if (this.board[this.index(this.furry.x, this.furry.y)] != null) {
                this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
            }
        };

        // pokazuje monetę na planszy
        this.showCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
        };

        // poruszanie się Furry'ego
        this.moveFurry = function () {
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
            this.checkCoinCollision();
            this.showFurry();
            this.gameOver();
        };

        // sterowanie klawiaturą
        this.turnFurry = function (event) {
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

        // usuwanie klonów Furry'ego
        this.hideVisibleFurry = function () {
            let visibleFurry = document.querySelector('.furry');
            if (visibleFurry != null) {
                visibleFurry.classList.remove('furry');
            }
        };

        // usuwanie monety
        this.hideVisibleCoin = function () {
            this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
        };

        // zderzenie z monetą
        this.checkCoinCollision = function () {
            if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {
                this.hideVisibleCoin();
                this.coinSound.play();
                this.score++;
                this.scoreDisplay.innerText = this.scoreFormat(this.score);
                this.coin = new Coin();
                this.showCoin();
                console.log('bang');
            }
        };

        // ustawia trzycyfrowy format punktacji
        this.scoreFormat = function (score) {
            if (score.toString().length == 1) {
                return `00${score}`;
            }
            else if (score.toString().length == 2) {
                return `0${score}`;
            }
            else {
                return score;
            }
        };

        // pokazuje napis "game over"
        this.showGameOverCaption = function () {
            this.gameOverCaption.classList.remove('invisible');
        };

        // ukrywa napis "game over"
        this.hideGameOverCaption = function () {
            this.gameOverCaption.classList.add('invisible');
        };

        // aktywuje przycisk "start game"
        this.enableStartButton = function () {
            this.startButton.disabled = false;
        };

        // dezaktywuje przycisk "start game"
        this.disableStartButton = function () {
            this.startButton.disabled = true;
        };

        // koniec gry - gdy Furry zderzy się z krawędzią planszy
        this.gameOver = function () {
            if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
                console.log('game over');
                clearInterval(this.setIntervalId);
                this.hideVisibleFurry();
                this.hideVisibleCoin();
                this.showGameOverCaption();
                this.enableStartButton();
            }
        };

        // wprawienie Furry'ego w ruch
        this.startGame = function () {
            this.setIntervalId = setInterval(() => { this.moveFurry(); }, 350);
            this.scoreDisplay.innerText = this.scoreFormat(0);
            this.hideGameOverCaption();
            this.disableStartButton();
        };
    }
}

export default Game;