// les 1
console.log("Hallo Wereld!");

let bericht = 'Hello world!';

let kop = document.querySelector("h1");

kop.textContent = bericht

const button = document.querySelector("button");

function veranderKop() {
    kop.textContent = bericht }

button.addEventListener("click", veranderKop)

// les 2 
const toegang = 18

let leeftijd = 10

if ( (leeftijd >= 18) && (leeftijd < 65) ) { 
    console.log("welkom bezoeker")
}

else if ( ( leeftijd > 9) && ( leeftijd < 18) ) {
    console.log("Ga naar zaal B")
}

else {
    console.log("ga weg")
}

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
button.addEventListener("click", function() {
    console.log('Ik ben geklikt');
})
})



