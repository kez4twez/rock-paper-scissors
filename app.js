
const game = () => {
    let cScore = 0;
    let pScore = 0;

    // Fades out intro screen and fades in match screen
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const playRound = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                hand.style.animation = '';
            })
        })

        hands.forEach(hand => {
            hand.addEventListener('animationstart', function(){
                hand.src = `./assets/rock.png`;
            })
        })

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener("click", function() {
              //Computer Choice
              const computerNumber = Math.floor(Math.random() * 3);
              const computerChoice = computerOptions[computerNumber];

              setTimeout(() => {
                //Call compareHands
                compareHands(this.textContent, computerChoice);

                //Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
              }, 1700)

              //Hand animation
              playerHand.style.animation = 'shakePlayer 2s ease';
              computerHand.style.animation = 'shakeComputer 2s ease';
            })
        })
    }

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector('.winner');

        //Checking for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        } 
        //Check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'paper') {
                winner.textContent = "Computer wins"
                cScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            }
        }
        //Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer wins"
                cScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            }
        }
        //Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer wins"
                cScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                checkWinner();//NOT CURRENTLY WORKING
                return;
            }
        }
    }

    //checkWinner function - WORKING
    function checkWinner() {
        const winner = document.querySelector('.winner');
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        
        if (pScore == 5 || cScore == 5) {
            if (pScore > cScore) {
                winner.textContent = `Player Wins! 5 - ${cScore}`;
                pScore = 0;
                cScore = 0;
                playerScore.textContent = '0';
                computerScore.textContent = '0';
            } else {
                winner.textContent = `Computer Wins! 5 - ${pScore}`;
                pScore = 0;
                cScore = 0;
                playerScore.textContent = '0';
                computerScore.textContent = '0';
            }
        }
        return;
    }
    

        
    //Inner function calls
    startGame();
    playRound();
}


//Start Game
game();

//Changes to be made
// - Change animation time to be less --- DONE
// - Change img's to be rock when shakePlayer and shakeComputer are active --- DONE
// - Make round limit of 5, winner and scores displayed on screen --- DONE


