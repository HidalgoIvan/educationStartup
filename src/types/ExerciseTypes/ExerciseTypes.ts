export interface ExerciseData {
  paragraph: string;
  equation: string;
  options: ExerciseOption[];
  hint: string;
}

export interface ExerciseOption {
  value: string;
  correct?: boolean;
}
