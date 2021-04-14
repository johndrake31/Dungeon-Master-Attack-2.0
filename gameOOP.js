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
let playerObj = {
    attack: 0,
    attackMax: 0,
    defense: 0,
    health: 0,
    healthMin: 100,
    healthMax: 125,
}

let bossObj = {
    attack: 6,
    defense: 4,
    health: 0,
    healthMin: 125,
    healthMax: 175,
}

//create element for game storyline.
const elementOl = document.createElement("ol");
elementOl.id = 'storyOl';
attackStory.appendChild(elementOl);

//Code snippet from Mozzilla.org random min-max number generator
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
    myOl.innerHTML = "";
    while (player > 0 && boss > 0) {
        //set boss attack to be random value between 1-6
        bossObj.attack = getRandomIntInclusive(1, 6)
        bossObj.defense = getRandomIntInclusive(0, 4)

        //logic to keep damage value from being a negitive number and  offsets the boss attack by players defense.
        bossObj.attack > playerObj.defense ?
            bossObj.attack = bossObj.attack - playerObj.defense :
            bossObj.attack = 0;

        player -= bossObj.attack;

        //player attacks boss random number between 1 and max
        playerObj.attack = getRandomIntInclusive(1, playerObj.attackMax);

        //logic to keep damage value from being a negitive number
        playerObj.attack > bossObj.defense ?
            playerObj.attack = playerObj.attack - bossObj.defense :
            playerObj.attack = 0;

        boss -= playerObj.attack;

        let elementLi = document.createElement('li');
        elementLi.innerHTML = `Player health = <span style="color:blue">${player < 0? player = 0 : player= player }!</span> <br> Boss health = <span style="color:red">${boss < 0? boss = 0 : boss= boss }!</span> `
        myOl.appendChild(elementLi);
        boss <= 0 ?
            finalMsg.innerHTML = `You Defeated the Evil Dungeon Master 😃 <br> <img id="you-win" src="./defeated-master.png" alt="Dungeon Master">` :
            finalMsg.innerHTML = `You were killed by the Evil Dungeon Master 😢 <br> <img id="you-lose" src="./deafeated-knight.jpeg">`;
    }
}

//radio button listener that sets player attack max range.
attackOpt.forEach(radioBtn => {
    radioBtn.addEventListener('change', (e) => {
        let eTar = e.target;
        playerObj.attackMax = +eTar.value;
        console.log(playerObj.attackMax);
    })
});

//radio button listener that sets player defense.
defenseOpt.forEach(radioBtn => {
    radioBtn.addEventListener('change', (e) => {
        let eTar = e.target;
        playerObj.defense = +eTar.value;
        console.log(playerObj.defense);
    })
});

//button listener that sets game in motion and forces player to choose atk and def options.
startAttack.addEventListener('click', (e) => {
    e.preventDefault();

    if (!playerObj.attackMax) {
        alert('please select an attack type');
    } else if (!playerObj.defense) {
        alert('please select a defense type');
    }
    if (playerObj.attackMax && playerObj.defense) {

        bossObj.health = getRandomIntInclusive(bossObj.healthMin, bossObj.healthMax);
        playerObj.health = getRandomIntInclusive(playerObj.healthMin, playerObj.healthMax);
        attackStoryFun(playerObj.health, bossObj.health);
    }
});