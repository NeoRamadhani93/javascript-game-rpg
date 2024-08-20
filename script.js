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
const monsterHealthText = document.querySelector("#monsterHealthText");

const locations = [{
    name: "alun alun kota",
    "button text": ["ke toko","ke hutan","lawan naga"],
    "button function":[goStore, goForest, fightDragon],
    text : "kamu berada di alun alun kota, kamu akan melihat tanda yang menunjukan \"toko\". "
},
{   name: "toko",
    "button text": ["beli potion darah (10 emas", "beli senjata (30 emas)", "ke alun alun kota"],
    "button function" : [buyHealth, buyWeapon, goTown ],
    text : "kamu berada di toko, silahkan beli apa yang kamu mau"
}
]
// inisiasi tombol 
button1.onclick=goStore;
button2.onclick=goForest;
button3.onclick=fightDragon;
function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];
    button1.onclick=location["button function"][0];
    button2.onclick=location["button function"][1];
    button3.onclick=location["button function"][2];
    text.innerText = location.text;
}
function goTown(){
   update(locations[0]);
}
function goStore(){
    update(locations[1]);
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
