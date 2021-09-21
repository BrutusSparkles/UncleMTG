var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.rollBtn');
var currentClass = '';
let showClass = '';


//show dice
function showDice() {
  var allDice = document.querySelectorAll('.cube');
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = 'block';
}}

//make the life totals disappear
function hideLifeTotals() {
  let lifeTotals = document.querySelectorAll('.lifeTotal');
  for (let i = 0; i < lifeTotals.length; i++) {
    lifeTotals[i].style.display = 'none';
  }
  showDice();
}

//hide dice
function hideDice() {
  var allDice = document.querySelectorAll('.cube');
  for (let i = 0; i < allDice.length; i++) {
    allDice[i].style.display = 'none';
}}

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
  hideDice();
}

//this function handles the actual rolling of the dice
function rollDice() {
    hideLifeTotals();
    var allDice = document.querySelectorAll('.cube');
  for (let i = 0; i < allDice.length; i++) {
    var randNum = getRandomInt(1, 7);
    let showClass = 'show-' + randNum;
    if (currentClass) {
        allDice[i].classList.remove(showClass);
    }
    allDice[i].classList.add(showClass);
    currentClass = showClass;
  }
    setTimeout(showLifeTotals, 4000);
}

//start with life totals visable
showLifeTotals();
rollBtn.addEventListener("click", rollDice);