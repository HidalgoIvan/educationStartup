import { Topic, TopicTypes } from '../../model/topic/Topic';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import { JSONTopicLoader } from '../topic/JSONTopicLoader';
import { TopicLoader } from '../topic/TopicLoader';
import { TopicStatsLoader } from './TopicStatsLoader';
import { RandomPoolStats } from '../../model/topic/stats/RandomPoolStatsController';

export class LSTopicStatsLoader implements TopicStatsLoader {
  private topicLoader: TopicLoader;

  constructor() {
    this.topicLoader = new JSONTopicLoader();
  }

  loadTopicStats = async (topicId: string): Promise<TopicStats> => {
    const topic = this.topicLoader.loadTopic(topicId);
    const topicType: TopicTypes = topic.type;
    let stats: TopicStats = { topicId: '', progressPercentage: 0 };
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

  private loadRandomPoolStats(topic: Topic) {
    const storeKeys: string[] = Object.keys(localStorage);
    let topicStats: RandomPoolStats;
    if (storeKeys.includes(topic.id)) {
      topicStats = JSON.parse(localStorage.getItem(topic.id) ?? '');
    } else {
      topicStats = {
        topicId: topic.id,
        completedExerciseIds: [],
        progressPercentage: 0,
        totalExercises: topic.contents.length,
      };
    }
    return topicStats;
  }
}
