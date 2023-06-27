import { Topic, TopicTypes } from '../../model/topic/Topic';
import {
  TopicStats,
  getEmptyTopicStats,
} from '../../model/topic/stats/TopicStats';
import { JSONTopicLoader } from '../topic/JSONTopicLoader';
import { TopicLoader } from '../topic/TopicLoader';
import { TopicStatsLoader } from './TopicStatsLoader';

export class LSTopicStatsLoader implements TopicStatsLoader {
  private topicLoader: TopicLoader;

  constructor() {
    this.topicLoader = new JSONTopicLoader();
  }

  loadTopicStats = async (topicId: string): Promise<TopicStats> => {
    const topic = this.topicLoader.loadTopic(topicId);
    const topicType: TopicTypes = topic.type;
    let stats: TopicStats = getEmptyTopicStats();
    switch (topicType) {
      case TopicTypes.RandomPool:
      default:
        stats = this.loadRandomPoolStats(topic);
        break;
    }
    return stats;
  };

  loadAllTopicStats = (): Promise<TopicStats[]> => {
    return Promise.resolve([]);
  };

  private loadRandomPoolStats(topic: Topic): TopicStats {
    const storeKeys: string[] = Object.keys(localStorage);
    let topicStats: TopicStats;
    if (storeKeys.includes(topic.id)) {
      topicStats = JSON.parse(localStorage.getItem(topic.id) ?? '');
    } else {
      topicStats = {
        topicId: topic.id,
        completedContentIds: [],
        progressPercentage: 0,
        contentCount: topic.contents.length,
      };
    }
    if (topicStats.contentCount != topic.contents.length) {
      topicStats.contentCount = topic.contents.length;
      topicStats.progressPercentage =
        topicStats.completedContentIds.length / topicStats.contentCount;
    }

    return topicStats;
  }
}
