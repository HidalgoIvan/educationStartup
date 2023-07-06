import { TopicStatsControllerBase } from '../../../controller/topicStatsController/TopicStatsControllerBase';
import { TopicContent, TopicContentTypes } from '../content/TopicContent';
import { ExamStats } from './ExamStats';
import { TopicStats } from './TopicStats';

type ExamStatsControllerProps = {
  stats: ExamStats;
  onStatsChanged: (stats: TopicStats) => void;
};

export class ExamStatsController extends TopicStatsControllerBase<ExamStats> {
  onStatsChanged: (stats: TopicStats) => void;

  constructor(props: ExamStatsControllerProps) {
    super(props.stats);
    this.onStatsChanged = props.onStatsChanged;
  }

  addCompletedContent = (content: TopicContent) => {
    if (!this.stats.completedContentIds.includes(content.id)) {
      this.stats.completedContentIds.push(content.id);
      if (content.type === TopicContentTypes.MultipleOption) {
        this.stats.progressPercentage =
          this.stats.completedContentIds.length / this.stats.contentCount;
      }
    }

    if (this.stats.progressPercentage > 1) {
      this.stats.progressPercentage = 1;
    }

    this.saveChanges();
    this.onStatsChanged(this.stats);
  };

  addCorrectAnswer = () => {
    this.stats.correctExercises = (this.stats.correctExercises ?? 0) + 1;
    this.saveChanges();
    this.onStatsChanged(this.stats);
  };
}
