export class Score {
  constructor() {
    this.correct = 0;
    this.wrong = 0;
  }

  totalQuestions() {
    return this.correct + this.wrong;
  }

  update(isCorrect) {
    isCorrect ? this.correct++ : this.wrong++;
  }

  accuracy() {
    return Math.round(this.correct / this.totalQuestions()) * 100;
  }
}
