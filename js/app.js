import Game from "./game.js";
import isMobile from "./mobile.js";

document.addEventListener("DOMContentLoaded", function() {
    const gameContainer = document.querySelector('#game_container');
    const mobileInfoCaption = document.querySelector('#mobile_info_caption');
    const desktopInfoCaption = document.querySelector('#desktop_info_caption');
    const startButton = document.querySelector('#start');

    if (isMobile.any()) {
        gameContainer.setAttribute('style', 'display: none');
        desktopInfoCaption.setAttribute('style', 'display: none');
        mobileInfoCaption.setAttribute('style', 'display: block');
    }

    startButton.addEventListener('click', function() {
        const newGame = new Game();

        newGame.showFurry();
        newGame.showCoin();
        newGame.startGame();

        document.addEventListener('keydown', function(event) { 
            newGame.turnFurry(event); 
        })
    })
})
