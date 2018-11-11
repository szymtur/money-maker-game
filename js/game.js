let Coin = require ('./coin.js');
let Furry = require ('./furry.js');

function Game(){
   this.board = document.querySelectorAll('#game_board div');
   this.furry = new Furry();
   this.coin = new Coin();
   this.coinSound = new Audio ('sounds/coin.wav');
   this.score = 0;

   this.index = function(x, y){ 
      return x + (y * 10); 
   };

   this.showFurry = function(){
      this.hideVisibleFurry();
      if (this.board[this.index(this.furry.x, this.furry.y)] != null) {
         this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
      }
   };

   this.showCoin = function(){
      this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
   };

   this.moveFurry = function(){
      if(this.furry.direction === 'right'){ 
         this.furry.x = this.furry.x + 1; 
      } 
      else if(this.furry.direction ==='left'){
         this.furry.x = this.furry.x - 1;
      }
      else if(this.furry.direction === 'up'){
         this.furry.y = this.furry.y + 1;
      }
      else if(this.furry.direction === 'down'){
         this.furry.y = this.furry.y - 1;
      }

      this.showFurry();
      this.checkCoinCollision();
      this.gameOver();
   };

   this.turnFurry = function(event){
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

   this.hideVisibleFurry = function(){
      let visibleFurry = document.querySelector('.furry');
      if(visibleFurry != null){
         visibleFurry.classList.remove('furry');
      }
   };

   this.hideVisibleCoin = function(){
      this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
   }

   this.checkCoinCollision = function(){
      if(this.furry.x === this.coin.x && this.furry.y === this.coin.y){
         console.log('bang');
         this.board[this.index(this.coin.x, this.coin.y)].classList.remove('coin');
         this.coin = new Coin();
         this.coinSound.volume = 1;
         this.coinSound.play();
         this.showCoin();
         this.score ++;
         document.querySelector('h2').innerText = this.scoreFormat(this.score);
      }
   };

   this.scoreFormat = function(score){
      if(score.toString().length == 1){
         return `00${score}`;
      }
      else if(score.toString().length == 2){
         return `0${score}`;
      }
      else{
         return score;
      }
   }

   this.showGameOverCaption = function(){
      let gameOverCaption = document.querySelector('#over');
      gameOverCaption.classList.remove('invisible');
   }

   this.hideGameOverCaption = function(){
      let gameOverCaption = document.querySelector('#over');
      gameOverCaption.classList.add('invisible');
   }

   this.enableStartButton = function(){
      let startButton = document.querySelector('#start');
      startButton.disabled = false;
   }

   this.disableStartButton = function(){
      let startButton = document.querySelector('#start');
      startButton.disabled = true;
   }
   
   this.gameOver = function(){
      if(this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9){
         console.log('game over');
         clearInterval(this.idSetInterval);
         this.hideVisibleFurry();
         this.hideVisibleCoin();
         this.showGameOverCaption();
         this.enableStartButton();
      }
   }

   this.startGame = function(){
      this.idSetInterval = setInterval( () => { this.moveFurry() }, 500);
      this.hideGameOverCaption();
      this.disableStartButton(); 
   };
}

// module.exports = Game;
export default Game;