class Game {
  #name;
  #score;
  #highScore;

  constructor(name, highScore) {
    this.#name = name;
    this.#score = 0;
    this.#highScore = highScore;
  }

  displayScore() {
    console.log(this.#score);
  }

  checkpoint() {
    ++this.#score;
  }

  hurt() {
    if(this.#score === 0) return "You lose";
    --this.#score;
  }

  restart() {
    this.#score = 0;
  }

  isNewHighScore() {
    this.#score > this.#highScore;
  }
}
