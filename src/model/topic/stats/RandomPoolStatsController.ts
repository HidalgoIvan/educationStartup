import { MultipleOptionContent } from '../content/MultipleOptionContent';
import { TopicContent, TopicContentTypes } from '../content/TopicContent';
import { TopicStats } from './TopicStats';

export interface RandomPoolStats extends TopicStats {
  completedExerciseIds: string[];
  totalExercises: number;
}

export class RandomPoolStatsController {
  stats: RandomPoolStats;
  onChange: (stats: RandomPoolStats) => void;

  constructor(
    stats: RandomPoolStats,
    onChange: (stats: RandomPoolStats) => void
  ) {
    this.stats = stats;
    this.onChange = onChange;
  }

  addCompletedExercise(exerciseId: string) {
    this.stats.completedExerciseIds.push(exerciseId);
    this.stats.progressPercentage =
      this.stats.completedExerciseIds.length / this.stats.totalExercises;
    this.saveChanges();
    this.onChange(this.stats);
  }

  pickRandomExercise(
    exercises: MultipleOptionContent[]
  ): MultipleOptionContent {
    if (this.stats.completedExerciseIds.length >= exercises.length) {
      return exercises[0];
    }

    this.stats.completedExerciseIds.forEach((exerciseId) => {
      exercises = exercises.filter((exercise) => exercise.id != exerciseId);
    });

    return exercises[Math.floor(Math.random() * exercises.length)];
  }

  private saveChanges() {
    localStorage.setItem(this.stats.topicId, JSON.stringify(this.stats));
  }
}
