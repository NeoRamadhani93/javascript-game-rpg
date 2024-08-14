let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon= 0;
let fighting;
let monsterHealth;
let inventory = ["batang kayu"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterNameText");
const monsterHealthText = document.querySelector("monsterHealthText");
// inisiasi tombol 
button1.onclick=goStore;
button2.onclick=goForest;
button3.onclick=fightDragon;

function goTown(){
    button1.innerText = "ke toko"
    button2.innerText = "ke hutan"
    button3.innerText = "lawan naga"
    button1.onclick=goStore;
    button2.onclick=goForest;
    button3.onclick=fightDragon;
    text.innerText = "kamu berada di alun alun kota, kamu akan melihat tanda yang menunjukan \"toko\". ";

}

function goStore(){
    button1.innerText = "beli potion darah sebanyak 5 nyawa (10 Emas)"
    button2.innerText = "beli senjata (30 emas)"
    button3.innerText = "ke alun alun kota"
    button1.onclick=buyHealth;
    button2.onclick=buyWeapon;
    button3.onclick=goTown;
    text.innerText = "kamu berada di toko, silahkan beli apa yang kamu mau"
}
function goForest(){
    console.log("menuju ke hutan")
}
function fightDragon(){
    console.log("menghadapi naga")
}
function buyHealth(){

}
function buyWeapon(){

}
