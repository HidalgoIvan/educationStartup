import { TopicStatsControllerBase } from '../../../controller/topicStatsController/TopicStatsControllerBase';
import { TopicContent } from '../content/TopicContent';
import { TopicStats } from './TopicStats';

type RandomPoolStatsControllerProps = {
  stats: TopicStats;
  onStatsChanged: (stats: TopicStats) => void;
};

export class RandomPoolStatsController extends TopicStatsControllerBase {
  onStatsChanged: (stats: TopicStats) => void;

  constructor(props: RandomPoolStatsControllerProps) {
    super(props.stats);
    this.onStatsChanged = props.onStatsChanged;
  }

  addCompletedContent = (content: TopicContent) => {
    this.stats.completedContentIds.push(content.id);
    this.stats.progressPercentage =
      this.stats.completedContentIds.length / this.stats.contentCount;
    this.saveChanges();
    this.onStatsChanged(this.stats);
  };
}
