import { TopicContent } from '../../model/topic/content/TopicContent';
import { TopicStats } from '../../model/topic/stats/TopicStats';

export abstract class TopicStatsControllerBase<
  Stats extends TopicStats = TopicStats
> {
  stats: Stats;
  abstract addCompletedContent: (content: TopicContent) => void;
  abstract onStatsChanged: (stats: TopicStats) => void;

  constructor(stats: Stats) {
    this.stats = stats;
  }

  isContentComplete = (contentId: string) =>
    this.stats.completedContentIds.includes(contentId);

  protected saveChanges = () => {
    localStorage.setItem(this.stats.topicId, JSON.stringify(this.stats));
  };
}
