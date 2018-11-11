// let Game = require ("./game.js");
import Game from "./game.js";

document.addEventListener("DOMContentLoaded", function(){
   let startButton = document.querySelector('#start');

   startButton.addEventListener('click', function(){
      let newGame = new Game();
      
      newGame.showFurry();
      newGame.showCoin();
      newGame.startGame();
   
      document.addEventListener('keydown', function(event){ 
         newGame.turnFurry(event); 
      })
   })
})
