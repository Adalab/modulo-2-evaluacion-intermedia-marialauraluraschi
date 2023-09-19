'use strict';
const form = document.querySelector('.js-form');
const select = document.querySelector('.js-select');
const btn = document.querySelector('.js-btn');
const scoreMsg = document.querySelector('.js-score');
const player = document.querySelector('.js-player');
const pc = document.querySelector('.js-pc');

let playerScore = 0;
let pcScore = 0;
let moves = 0;

function initial() {
  player.innerHTML = `Jugador: ${playerScore}`;
  pc.innerHTML = `Computadora: ${pcScore}`;
}
initial();

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function pcSelect() {
  const randNum = getRandomNumber(9);
  if (randNum <= 3) {
    return 'piedra';
  } else if (randNum >= 7) {
    return 'papel';
  } else {
    return 'tijera';
  }
}

function compare() {
  const playerSelection = select.value;
  const pcSelection = pcSelect();
  if (playerSelection !== '') {
    moves++;
    if (playerSelection === pcSelection) {
      scoreMsg.innerHTML = 'Empate';
    } else if (
      (playerSelection === 'piedra' && pcSelection === 'tijera') ||
      (playerSelection === 'papel' && pcSelection === 'piedra') ||
      (playerSelection === 'tijera' && pcSelection === 'papel')
    ) {
      scoreMsg.innerHTML = '¡Has ganado!';
      playerScore++;
    } else {
      scoreMsg.innerHTML = '¡Has perdido!';
      pcScore++;
    }
    initial();
  }
}

function gameOver() {
  if (moves >= 10) {
    if (pcScore === playerScore) {
      scoreMsg.innerHTML = 'Esta partida salió empatada';
    } else if (pcScore < playerScore) {
      scoreMsg.innerHTML = '¡Has ganado esta partida!';
    } else {
      scoreMsg.innerHTML = '¡Has perdido esta partida!';
    }
    form.innerHTML +='<button class="js-btn-rst">Vuelve a empezar</button>';
    const rstBtn = document.querySelector('.js-btn-rst');
    function handleReset(){
        playerScore = 0;
        pcScore = 0;
        moves = 0;
        initial();
    }
    rstBtn.addEventListener('click', handleReset);
  }
}

function handleClick(event) {
  event.preventDefault();
  compare();
  gameOver();
}

btn.addEventListener('click', handleClick);