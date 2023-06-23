import { TopicStats } from '../../model/topic/stats/TopicStats';

export interface TopicStatsLoader {
  loadTopicStats: (topicId: string) => Promise<TopicStats>;
  loadAllTopicStats: () => Promise<TopicStats[]>;
}
