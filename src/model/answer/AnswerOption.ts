export class AnswerOption {
  value: string | number;
  correct: boolean;
  formula?: string;

  constructor(value: string | number, correct = false, formula?: string) {
    this.value = value;
    this.correct = correct;
    this.formula = formula;
  }
}
