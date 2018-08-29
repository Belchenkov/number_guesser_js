// Game values
let min = 1,
    max = 10,
    winningNum = 2, // правильное число
    guessesLeft = 3; // кол-во попыток

// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function () {
   let guess = parseInt(guessInput.value);

   // Validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Пожалуйста, введите число от ${min} до ${max}`, 'red');
    }

    // Check if won
    if (guess === winningNum) {
        // Game over won
        gameOver(true, `${winningNum} - это правильный ответ! Вы выиграли!`)
    } else {
        // Wrong number
        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // Game over - lost
            gameOver(false, `Вы проиграли! Правильный ответ - ${winningNum}`);
        } else {
            // Game continues - answer wrong
            // Change border color
            guessInput.style.borderColor = 'red';

            // Clear input
            guessInput.value = '';

            // Tell user its the wrong number
            setMessage(`${guess} - это неправильный ответ, у Вас осталось ${guessesLeft} попытки`, 'red')
        }
    }
});

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    // Disable input
    guessInput.disabled = true;
    // Change border color
    guessInput.style.borderColor = color;
    // Change text color
    message.style.color = color;
    // Set message
    setMessage(msg, color);
}

// Set message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

