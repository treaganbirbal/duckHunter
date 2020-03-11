// Let’s set up or main pieces of logic. This would include running some functionality when we click on our duck.
// 1. Create an event listener on our duck image. When a user clicks on the duck image we should fire a function. For now, it doesn’t matter what the function does. First, we just want to make sure it’s firing correctly.
// When we click on our duck we want a few things to happen.
  //First, we want our score to increase.
  //Second, we want our duck to move to a random position on the screen.
  //Let’s start  building out the functions to make this happen.

// 2. Let’s build a function called “increaseScore”. "increaseScore" should target the value of the HTML element in our index.html file that contains our user’s current score and increase it by 1.
// Once this logic is built out let’s call it every time we click on our duck image.

// 3. Now let’s build a function called “moveDuck”. This function will be a little more complex. When this function is called we want our duck to move to a new random position on the screen. Our boiler plate code already has our duck set to “position: absolute”. This may give us a hint as to how we can dynamically adjust our CSS (using Javascript) to make our duck move. Try doing a little bit of research on this.
  // - To make this "moveDuck" function work properly we will have to generate random numbers to set the position of where the duck will move to. This is a good opportunity to make code more modularized. Create a function called “randomNum” that takes one argument num and returns  a random number between 0 and num.
  // - Use the "randomNum" function in the "moveDuck" function to move our duck image to a random position on the screen.
  // - Now let’s have this “moveDuck” function fire every time our user clicks on the duck.

// 4. The basics of our application are finished now. If we our user clicks the duck it should increase the score and move the duck to a new position. This isn't a very fun game though.
  // - The final things we need to do to make our game a little more interesting is set up the functionality that continuously moves our duck around the page on a random basis.
  // - The browser/Javascript has a built in function that allows you to schedule a function to be ran on a continuous basis (every X number of milliseconds).
  // - Use that function to fire the "moveDuck" function every 2 seconds.

// CODE GOES BELOW THIS LINE
let duck = document.querySelector('.duck')
let score = document.querySelector('#score')

function handleClick(event){
   console.log(event)
}

function increaseScore(){
    let score = document.querySelector('#score');
    let numberedScore = Number(score.innerHTML)
    ++numberedScore
    score.innerHTML = numberedScore
}

function moveDuck(){
 let width = window.innerWidth;
 let height = window.innerHeight;
 duck.style.top = randomNum(width) + 'px';
 duck.style.left = randomNum(height) + 'px';
}

function randomNum(num){
    console.log(Math.floor(Math.random() * Math.floor(num)));
   return Math.floor(Math.random() * Math.floor(num))
}


duck.addEventListener('click', () => {increaseScore(); moveDuck()})

window.setInterval(moveDuck, 1000)
