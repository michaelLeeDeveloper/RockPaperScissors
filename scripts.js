var paperButton = document.querySelector("#paperButton");
var rockButton = document.querySelector("#rockButton");
var scissorsButton = document.querySelector("#scissorsButton");




const generateOpponent = () => {
    let random = Math.floor(Math.random() * 3);
    switch (random) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

const whoWon = (input, opponent) => {
    if (input === "rock") {
        switch (opponent) {
            case 'rock':
                return `You both chose ${opponent}! It's a tie!`
            case 'paper':
                return `You chose ${input} and the computer chose ${opponent}. You lose!!!`
            case 'scissors':
                return `You chose ${input} and the computer chose ${opponent}. You win!!!`
        }
    }
    if (input === "paper") {
        switch (opponent) {
            case 'rock':
                return `You chose ${input} and the computer chose ${opponent}. You win!!!`
            case 'paper':
                return `You both chose ${opponent}! It's a tie!`
            case 'scissors':
                return `You chose ${input} and the computer chose ${opponent}. You lose!!!`
        }
    }
    if (input === "scissors") {
        switch (opponent) {
            case 'rock':
                return `You chose ${input} and the computer chose ${opponent}. You lose!!!`

            case 'paper':
                return `You chose ${input} and the computer chose ${opponent}. You win!!!`

            case 'scissors':
                return `You both chose ${opponent}! It's a tie!`

        }
    }
}

const playGame = (evt) => {
    evt.preventDefault();
    let input = evt.srcElement;
    input = input.alt;
    let opponent = generateOpponent();
    document.querySelector("#text").innerHTML = whoWon(input, opponent);

}


paperButton.addEventListener("click", (evt) => {
    playGame(evt);
});
rockButton.addEventListener("click", (evt) => {
    playGame(evt);
});
scissorsButton.addEventListener("click", (evt) => {
    playGame(evt);
});
