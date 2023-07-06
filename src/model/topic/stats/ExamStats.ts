import { TopicStats } from './TopicStats';

type ExamStatsProps = {
  topicId: string;
  progressPercentage: number;
  contentCount: number;
  completedContentIds: string[];
  totalExercises?: number;
  correctExercises?: number;
};

export class ExamStats implements TopicStats {
  topicId: string;
  progressPercentage: number;
  contentCount: number;
  completedContentIds: string[];
  totalExercises?: number;
  correctExercises?: number;

  constructor(props: ExamStatsProps) {
    this.topicId = props.topicId;
    this.progressPercentage = props.progressPercentage;
    this.contentCount = props.contentCount;
    this.completedContentIds = props.completedContentIds;
    this.totalExercises = props.totalExercises ?? 1;
    this.correctExercises = props.correctExercises ?? 0;
  }
}
