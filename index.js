const tp = document.querySelector(".tp");
const bt = document.querySelector(".bt");
const sd1 = document.querySelector(".sd-1");
const sd2 = document.querySelector(".sd-2");
const sd3 = document.querySelector(".sd-3");
const md = document.querySelector(".md");
const cr1 = document.querySelector(".cr-1");
const cr2 = document.querySelector(".cr-2");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const tr = document.querySelector(".tr");
const resultMsg = document.querySelector(".resultMsg");
const playerSelectDiv = document.querySelector(".playerSelect");
const playAgainBtn = document.querySelector(".playAgain");
const td = document.querySelectorAll(".td");

class App {
  #activePlayer = 0;
  #clicked;
  #tp_Player0 = [];
  #tp_Player1 = [];
  #bt_Player0 = [];
  #bt_Player1 = [];
  #sd1_Player0 = [];
  #sd1_Player1 = [];
  #sd2_Player0 = [];
  #sd2_Player1 = [];
  #sd3_Player0 = [];
  #sd3_Player1 = [];
  #md_Player0 = [];
  #md_Player1 = [];
  #cr1_Player0 = [];
  #cr1_Player1 = [];
  #cr2_Player0 = [];
  #cr2_Player1 = [];
  #winner = false;
  #ex = 0;

  #player = ["X", "O"];

  constructor() {
    tr.addEventListener("click", this._playGame.bind(this));

    playAgainBtn.addEventListener("click", this._init.bind(this));
  }
  _init() {
    this.#tp_Player0 = [];
    this.#tp_Player1 = [];
    this.#bt_Player0 = [];
    this.#bt_Player1 = [];
    this.#sd1_Player0 = [];
    this.#sd1_Player1 = [];
    this.#sd2_Player0 = [];
    this.#sd2_Player1 = [];
    this.#sd3_Player0 = [];
    this.#sd3_Player1 = [];
    this.#md_Player0 = [];
    this.#md_Player1 = [];
    this.#cr1_Player0 = [];
    this.#cr1_Player1 = [];
    this.#cr2_Player0 = [];
    this.#cr2_Player1 = [];
    this.#winner = false;
    this.#ex = 0;
    this.#activePlayer = 0;
    player0.classList.add("player--active");
    player1.classList.remove("player--active");
    playerSelectDiv.classList.remove("hidden");
    playAgainBtn.classList.add("hidden");
    resultMsg.classList.add("hidden");
    this._wipeTable();
  }
  _wipeTable() {
    for (let i = 0; i < td.length; i++) {
      td[i].textContent = "";
    }
  }
  _playGame(e) {
    if (e.target.id === "td") {
      //assigning clicked
      this.#clicked = e.target;
      // check if the position is occupied
      if (e.target.textContent === "X" || e.target.textContent === "O") return;
      e.target.textContent = this.#player[this.#activePlayer];
      if (this.#activePlayer === 0) this.#ex++;

      //conditions for winning and game play
      this._conditions();
      //for draw
      this._forDraw();
      // switch palyer
      this._switchPlayer();
    }
  }
  _switchPlayer() {
    player0.classList.toggle("player--active");
    player1.classList.toggle("player--active");
    this.#activePlayer = this.#activePlayer === 0 ? 1 : 0;
  }
  _conditions() {
    if (this.#activePlayer === 0) {
      this._allPlayer0Conditions();
    }
    if (this.#activePlayer === 1) {
      this._allPlayer1Conditions();
    }
  }
  _forDraw() {
    if (this.#ex >= 5 && !this.#winner) this._draw();
  }
  _allPlayer0Conditions() {
    this.#clicked.classList.forEach((i) => {
      if (i === "tp") {
        this.#tp_Player0.push("0");
        if (this.#tp_Player0.length >= 3) {
          this.#winner = true;
          {
            this.#winner = true;
            this._player1Win();
          }
        }
      }
      if (i === "bt") {
        this.#bt_Player0.push("0");
        if (this.#bt_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "sd-1") {
        this.#sd1_Player0.push("0");
        if (this.#sd1_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "sd-2") {
        this.#sd2_Player0.push("0");
        if (this.#sd2_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "sd-3") {
        this.#sd3_Player0.push("0");
        if (this.#sd3_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "md") {
        this.#md_Player0.push("0");
        if (this.#md_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "cr-1") {
        this.#cr1_Player0.push("0");
        if (this.#cr1_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
      if (i === "cr-2") {
        this.#cr2_Player0.push("0");
        if (this.#cr2_Player0.length >= 3) {
          this.#winner = true;
          this._player1Win();
        }
      }
    });
  }
  _allPlayer1Conditions() {
    this.#clicked.classList.forEach((i) => {
      if (i === "tp") {
        this.#tp_Player1.push("1");
        if (this.#tp_Player1.length >= 3) this._player2Win();
      }
      if (i === "bt") {
        this.#bt_Player1.push("1");
        if (this.#bt_Player1.length >= 3) this._player2Win();
      }
      if (i === "sd-1") {
        this.#sd1_Player1.push("1");
        if (this.#sd1_Player1.length >= 3) this._player2Win();
      }
      if (i === "sd-2") {
        this.#sd2_Player1.push("1");
        if (this.#sd2_Player1.length >= 3) this._player2Win();
      }
      if (i === "sd-3") {
        this.#sd3_Player1.push("1");
        if (this.#sd3_Player1.length >= 3) this._player2Win();
      }
      if (i === "md") {
        this.#md_Player1.push("1");
        if (this.#md_Player1.length >= 3) this._player2Win();
      }
      if (i === "cr-1") {
        this.#cr1_Player1.push("1");
        if (this.#cr1_Player1.length >= 3) this._player2Win();
      }
      if (i === "cr-2") {
        this.#cr2_Player1.push("1");
        if (this.#cr2_Player1.length >= 3) this._player2Win();
      }
    });
  }
  _player1Win() {
    resultMsg.classList.remove("hidden");
    resultMsg.textContent = "Player 1 wins";
    playerSelectDiv.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  }
  _player2Win() {
    resultMsg.classList.remove("hidden");
    resultMsg.textContent = "Player 2 wins";
    playerSelectDiv.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  }
  _draw() {
    resultMsg.classList.remove("hidden");
    resultMsg.textContent = "Draw";
    playerSelectDiv.classList.add("hidden");
    playAgainBtn.classList.remove("hidden");
  }
}

const app = new App();
