/*
    Coin Constructor
*/

class Coin {
    constructor() {
        this.position = 0;
    }

    newPosition() {
        const notAllowed = [this.position, this.position + 1, this.position + 10, this.position - 1, this.position - 10];

        let newCoinPosition;

        do {
            newCoinPosition = Math.floor(Math.random() * 100);

        } while (newCoinPosition === undefined || notAllowed.includes(newCoinPosition));

        this.position = newCoinPosition;
    }
}

export default Coin;