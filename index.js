const score = {
  wins: 0,
  losses:0,
  ties: 0
}

function pickComputerMove () {
   let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/3) {computerMove = 'rock'} 
    else if (randomNumber >= 1/3 && randomNumber < 2/3) {computerMove = 'paper'}
    else if (randomNumber >= 2/3 && randomNumber <= 1) {computerMove = 'scissors'}
  return computerMove;
  }


  function runGame (playerMove) {
     pickComputerMove ();
  //for rock
      if (computerMove === 'rock' && playerMove === 'rock') {result = 'Tie', score.ties +=1} 
   else if (computerMove === 'rock' && playerMove === 'paper') {result = 'You win', score.wins += 1}
   else if (computerMove === 'rock' && playerMove === 'scissors'){result = 'You lose', score.losses += 1};

   //for paper
    if (computerMove === 'paper' && playerMove === 'rock') {result = 'You lose', score.losses += 1} 
   else if (computerMove === 'paper' && playerMove === 'paper') {result = 'Tie', score.ties +=1}
   else if (computerMove === 'paper' && playerMove === 'scissors'){result = 'You win', score.wins += 1};

   //for scissors
    if (computerMove === 'scissors' && playerMove === 'rock') {result = 'You win', score.wins += 1} 
   else if (computerMove === 'scissors' && playerMove === 'paper') {result = 'You lose', score.losses += 1}
   else if (computerMove === 'scissors' && playerMove === 'scissors'){result = 'Tie', score.ties +=1};
   

//for score display
   if (result === 'You lose' || result === 'You win' || result === 'Tie') {document.querySelector('.score-display').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`,
    document.querySelector('.result-display').innerText = result,
      document.querySelector('.picks-display').innerHTML = `
  <div class="flex justify-center items-center gap-10 mt-4">
    <div class="flex flex-col items-center">
      <span class="text-sm font-bold mb-1">You</span>
      ${getIcon(playerMove)}
    </div>
    <div class="flex flex-col items-center">
      <span class="text-sm font-bold mb-1">Computer</span>
      ${getIcon(computerMove)}
    </div>
  </div>`;
  }
}

//for move icons
function getIcon (move) {
if (move === 'rock') {return '<button class="fa-solid fa-hand-back-fist h-20 w-20 py-2 px-6 text-white bg-black/70 rounded-full"</button>'}

else if (move === 'paper') {return '<button class="fa-solid fa-hand h-20 w-20 py-2 px-6 text-white bg-black/70 rounded-full"</button>'}

else if (move === 'scissors') {return'<button class="fa-solid fa-hand-scissors h-20 w-20 py-2 px-6 text-white bg-black/70 rounded-full"</button>'}
}
  //for reset button
  function resetScore () {score.wins= 0,
  score.losses = 0,
  score.ties = 0;

  document.querySelector('.score-display').innerText = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`,
   document.querySelector('.result-display').innerText = '',
   document.querySelector('.picks-display').innerText = ''
}

  
