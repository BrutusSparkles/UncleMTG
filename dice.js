var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.rollBtn');
var currentClass = '';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function rollDice() {
    var randNum = getRandomInt(1,7);
    console.log(randNum);
    let showClass = 'show-' + randNum;
    console.log(showClass)
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
// set initial side
rollDice();

rollBtn.addEventListener("click", rollDice);