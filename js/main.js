'use strict';

const select= document.querySelector('.js-select');
const btn= document.querySelector('.js-btn');
const score= document.querySelector('.js-score');
const player= document.querySelector('.js-player');
const pc= document.querySelector('.js-pc');

let playerScore= 0;
let pcScore=0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }

function pcSelection() {
    const randNum = getRandomNumber(9);
    if (randNum <= 3) {
        return 'piedra';
    } else if (randNum >= 7) {
        return 'papel';
    } else {
        return 'tijera';
    }
}

function play(){
    const playerSelection=select.value;
}

function handleClick(event){
    event.preventDefault();
    play();
}

btn.addEventListener('click', handleClick);