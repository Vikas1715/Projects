const randomNum = parseInt((Math.random()*100)+1)
const submit = document.querySelector('#sbt')
const userInput = document.querySelector('#guessField')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')
const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true
if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number.")
    } else if(guess<1){
        alert("Please enter a number greater than 0");
    } else if(guess>100){
        alert("Please enter a number less tha or equal to 100")
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage('You guessed it right.')
    } else if(guess < randomNum){
        displayMessage('Input number is low.')
    } else if (guess > randomNum){
        displayMessage('Input is high.')
    }
}

function displayGuess(guess){
    userInput.value = ''
    guesses.innerHTML += `${guess} `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}
function endGame(){
   // 
}
function newGame(){
    //
}

