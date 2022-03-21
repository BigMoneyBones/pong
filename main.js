// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get ball element
const ballElement = document.querySelector('.ball');

// Ball parameters
let ballXPosition = 350;
let ballYPosition = 250;
let ballXVelocity = 1;
let ballYVelocity = 1;

// Get the computer paddle element
const computerPaddle = document.querySelector('.computer-paddle');

// Get the player paddle element
const playerPaddle = document.querySelector('.player-paddle');

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 1;

// The y-veloctiy of the player paddle
let playerPaddleYPosition = 0;
let playerPaddleYVelocity = 1;

// Update the pong world
function update() {

    // if (ballXPosition === 0) {
    //     ballXVelocity = ballXVelocity * -1; // BOUNCE
    // } 

    if (ballXPosition === 0) {
        ballXPosition = 350;    // RESET
        ballYPosition = 250;
        ballXVelocity = ballXVelocity * -1;
    } 

    if (ballYPosition === 0) {
        ballYVelocity = ballYVelocity * -1;
    }

    // if(ballXPosition === 680) {
    //     ballXVelocity = ballXVelocity * -1; // BOUNCE
    // }

    if(ballXPosition === 680) {
        ballXPosition = 350;
        ballYPosition = 250;
        ballXVelocity = ballXVelocity * -1; // RESET
    }

    if (ballYPosition === 480) {
        ballYVelocity = ballYVelocity * -1;
    }

    if (computerPaddleYPosition === 400) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1;
    } else if (computerPaddleYPosition === -1) {
        computerPaddleYVelocity = computerPaddleYVelocity * -1;
    }

    // Update the computer paddle's position
    computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

    // Update the player paddle's position
    playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;

    // Apply the y-position 
    computerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Apply the y-position
    playerPaddle.style.top = `${computerPaddleYPosition}px`;

    // Update ball position
    ballXPosition = ballXPosition + ballXVelocity;
    ballYPosition = ballYPosition + ballYVelocity;

    // Apply x and y position
    ballElement.style.top = `${ballYPosition}px`;
    ballElement.style.left = `${ballXPosition}px`;

}

// Call the update() function every 35ms
setInterval(update, 35);



