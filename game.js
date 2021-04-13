"use strict";

/**
 * SELECTORS
 */
//radio attack btns
const attackOpt = document.querySelectorAll('[name=weapon]');
//radio defense btns
const defenseOpt = document.querySelectorAll('[name=def]');
//submit attack btn
const startAttack = document.getElementById('start-attack');
//game story msgs
let attackStory = document.getElementById('list-attacks');
let finalMsg = document.getElementById('final-msg');

/**
 * GAME VALUES and Elements
 */
let attackValue = 1;
let defenseValue = 0;
let bossAttack = 6;

let bossHealth = 0;
const bossHealthMin = 125;
const bossHealthMax = 175;

let playerHealth = 0;
const playerHealthMin = 100;
const playerHealthMax = 125;

const elementOl = document.createElement("ol");
elementOl.id = 'storyOl';

//Code snippet from Mozzilla.org
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * GAME INTERACTIONS & LOGIC
 */
function attackStoryFun(player, boss) {

    const myOl = document.getElementById('storyOl');

    while (player > 0 && boss > 0) {
        bossAttack = getRandomIntInclusive(1, 6)
        bossAttack > defenseValue ? bossAttack = bossAttack - defenseValue : bossAttack = 0;
        let elementLi = document.createElement('li');
        player -= bossAttack;
        boss -= getRandomIntInclusive(1, attackValue);
        elementLi.innerHTML = `Player health = <span style="color:blue">${player < 0? player = 0 : player= player }!</span> Boss health = <span style="color:red">${boss < 0? boss = 0 : boss= boss }!</span> `
        myOl.appendChild(elementLi);
        boss <= 0 ? finalMsg.innerHTML = `You Defeated the Evil Dungeon Master 😃 <br> <img id="you-win" src="./defeated-master.png" alt="Dungeon Master">` : finalMsg.innerHTML = `You were killed by the Evil Dungeon Master 😢 <br> <img id="you-lose" src="./deafeated-knight.jpeg">`;
    }
}

attackOpt.forEach(radioBtn => {
    radioBtn.addEventListener('change', (e) => {
        let eTar = e.target;
        attackValue = +eTar.value;
        console.log(attackValue);
    })
});

defenseOpt.forEach(radioBtn => {
    radioBtn.addEventListener('change', (e) => {
        let eTar = e.target;
        defenseValue = +eTar.value;
        console.log(defenseValue);
    })
});

startAttack.addEventListener('click', (e) => {
    e.preventDefault();
    if (!attackValue || !defenseValue) {
        if (!attackValue) {
            alert('please select an attack type')
        } else if (!defenseValue) {
            alert('please select an defense type')
        }
    }
    attackStory.appendChild(elementOl);
    bossHealth = getRandomIntInclusive(bossHealthMin, bossHealthMax);
    playerHealth = getRandomIntInclusive(playerHealthMin, playerHealthMax);
    attackStory.appendChild(elementOl);
    attackStoryFun(playerHealth, bossHealth);

});