import { ExerciseData } from '../../types/ExerciseTypes/ExerciseTypes';
import { Session } from '../Session/Session';

const loadExercises = (data: ExerciseData[]): Session => {
  return {
    totalExercises: data.length,
    exercises: data,
  };
};

export { loadExercises };
