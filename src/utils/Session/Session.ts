import { ExerciseData } from '../../types/ExerciseTypes/ExerciseTypes';

export interface Session {
  totalExercises: number;
  exercises: ExerciseData[];
}
