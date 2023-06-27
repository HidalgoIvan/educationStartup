import { TopicStatsControllerBase } from '../../../controller/topicStatsController/TopicStatsControllerBase';
import { TopicContent } from '../content/TopicContent';
import { TopicStats } from './TopicStats';

type TutorialStatsControllerProps = {
  stats: TopicStats;
  onStatsChanged: (stats: TopicStats) => void;
};

export class TutorialStatsController extends TopicStatsControllerBase {
  onStatsChanged: (stats: TopicStats) => void;

  constructor(props: TutorialStatsControllerProps) {
    super(props.stats);
    this.onStatsChanged = props.onStatsChanged;
  }

  addCompletedContent = (content: TopicContent) => {
    if (!this.stats.completedContentIds.includes(content.id)) {
      this.stats.completedContentIds.push(content.id);
    }

    if (this.stats.progressPercentage < 1) {
      this.stats.progressPercentage =
        this.stats.completedContentIds.length / this.stats.contentCount;
    }

    this.saveChanges();
    this.onStatsChanged(this.stats);
  };
}
