export class AnswerOption {
  value: string | number;
  correct: boolean;
  constructor(value: string | number, correct = false) {
    this.value = value;
    this.correct = correct;
  }
}
