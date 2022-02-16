/*
    Coin Constructor
*/

class Coin {
    constructor(position) {
        this.position = position;
        this.newPosition = this.execute();
    }

    execute() {
        const notAllowed = [this.position, this.position + 1, this.position + 10, this.position - 1, this.position - 10];

        let newCoinPosition;

        do {
            newCoinPosition = Math.floor(Math.random() * 100);

        } while (newCoinPosition === undefined || notAllowed.includes(newCoinPosition));

        return newCoinPosition;
    }
}

export default Coin;