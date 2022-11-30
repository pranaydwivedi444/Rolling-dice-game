//_----------------------------------->________________>>>>>>>>>>>>>>>>>>>>>>____>>>>>>>>>>>>>>>>>>>>>>>>>>
//Storing variables

//state variable
let play = true;

const _dice = document.querySelector(".dice");
const _btnnew = document.querySelector(".btn--new");
const _btnroll = document.querySelector(".btn--roll");
const _btnhold = document.querySelector(".btn--hold");
const score_0 = document.getElementById("score--0");
const score_1 = document.getElementById("score--1");
const scores = [0, 0];
const player_0 = document.querySelector(".player--0");
const player_1 = document.querySelector(".player--1");
let current_0 = document.querySelector("#current--0");
let current_1 = document.querySelector("#current--1");
let activePlayer = 0;
let current_score = 0;

function inint() {
  score_0.textContent = 0;
  score_1.textContent = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--winner");
  _dice.classList.add("hidden");
  activePlayer = 0;
  current_0.textContent = 0;
  current_1.textContent = 0;
  player_0.classList.add("player--active");
  play = true;
}

inint();

//rolling dice function
const diceRoll = function () {
  if (play) {
    //generating the new number
    let num = Math.trunc(Math.random() * 6 + 1);
    _dice.classList.remove("hidden");
    _dice.src = `Images/dice-${num}.png`;
    if (num === 1) {
      current_score = 0;
      document.getElementById(`current--${activePlayer}`).textContent =
        current_score;
      switchPlayer();
    }
    current_score += num;
    document.getElementById(`current--${activePlayer}`).textContent =
      current_score;
  }
};

//switching player function
const switchPlayer = function () {
  current_score = 0;
  player_0.classList.toggle("player--active");
  player_1.classList.toggle("player--active");

  activePlayer = activePlayer === 0 ? 1 : 0;
};

//hold roll function

const holdRoll = function () {
  if (play) {
    scores[activePlayer] += current_score;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 25) winner();
    else switchPlayer();
  }
};
//game winner function
function winner() {
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--winner");
  play = false;
}

_btnroll.addEventListener("click", diceRoll);
_btnhold.addEventListener("click", holdRoll);
_btnnew.addEventListener("click", inint);
