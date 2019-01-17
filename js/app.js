import Game from "./game.js";
import isMobile from "./mobile.js";

document.addEventListener("DOMContentLoaded", function() {
    let gameContainer = document.querySelector('#game_container');
    let infoCaption = document.querySelector('#info_caption')
    let startButton = document.querySelector('#start');
   
    if (isMobile.any()) {
        gameContainer.classList.add('invisible');
        infoCaption.classList.remove('invisible');
    }

    startButton.addEventListener('click', function() {
        let newGame = new Game();
      
        newGame.showFurry();
        newGame.showCoin();
        newGame.startGame();
   
        document.addEventListener('keydown', function(event) { 
            newGame.turnFurry(event); 
        })
    })
})
