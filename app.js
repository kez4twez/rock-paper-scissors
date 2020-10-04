
const game = () => {
    let cScore = 0;
    let pScore = 0;

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
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                return;
            }
        }
        //Check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer wins"
                cScore++
                updateScore();
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                return;
            }
        }
        //Check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = "Computer wins"
                cScore++
                updateScore();
                return;
            } else  {
                winner.textContent = "Player wins"
                pScore++
                updateScore();
                return;
            }
        }
        //checkWinner function - NOT CURRENTLY WORKING
        const checkWinner = () => {
        const winner = document.querySelector('.winner');
        const winTotal = document.createElement('p')
        
        if (pScore >= 5 || cScore >= 5) {
         if (pScore > cScore) {
             winTotal.textContent = `Player Wins! 5 - ${cScore}`;
         } else {
             winTotal.textContent = `Computer Wins! 5 - ${pScore}`;
         }
        } else {
            return;
        }
        winner.appendChild(winTotal);
      }
    }


    //Inner function calls
    startGame();
    playRound();
    checkWinner();//NOT CURRENTLY WORKING
}

//Start Game
game();

//Changes to be made
// - Change animation time to be less --- DONE
// - Change img's to be rock when shakePlayer and shakeComputer are active --- DONE


