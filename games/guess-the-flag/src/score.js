export class Score {
  constructor() {
    this.correct = 0;
  }

  update(isCorrect) {
    if (isCorrect) this.correct++;
  }
}
