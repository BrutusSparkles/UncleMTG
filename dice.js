var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.rollBtn');
var currentClass = '';

//make the life totals disappear
function hideLifeTotals() {
  let lifeTotals = document.querySelectorAll('.lifeTotal');
  for (let i = 0; i < lifeTotals.length; i++) {
    lifeTotals[i].style.display = 'none';
  }
}

//get a random number for roll dice funtion
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//make the life totals appear
function showLifeTotals() {
  let lifeTotals = document.querySelectorAll('.lifeTotal');
  for (let i = 0; i < lifeTotals.length; i++) {
    lifeTotals[i].style.display = 'block';
  }
}

//this function handles the actual rolling of the dice
function rollDice() {
    hideLifeTotals();
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
showLifeTotals();