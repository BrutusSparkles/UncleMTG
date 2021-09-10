function mtgImageDisplay() {
    var x = document.getElementById("uncleMtgImg1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  //roll dice function going here

  //make the life totals disappear
  function hideLifeTotals() {
    let lifeTotals = document.querySelectorAll('.lifeTotal');
    for (let i = 0; i < lifeTotals.length; i++) {
      lifeTotals[i].style.display = 'none';
    }
  }

rollButton.addEventListener = ("click", hideLifeTotals)

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
    var showClass = 'show-' + randNum;
    console.log(showClass)
    if ( currentClass ) {
        cube.classList.remove( currentClass );
    }
    cube.classList.add( showClass );
    currentClass = showClass;
}
// set initial side
rollDice();

rollBtn.addEventListener("click", rollDice);