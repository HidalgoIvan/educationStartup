import { Topic, TopicTypes } from '../../model/topic/Topic';
import { TopicContentTypes } from '../../model/topic/content/TopicContent';
import { ExamStats } from '../../model/topic/stats/ExamStats';
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
    const topic = await this.topicLoader.loadTopic(topicId);
    const topicType: TopicTypes = topic.type;
    let stats: TopicStats = getEmptyTopicStats();
    switch (topicType) {
      case TopicTypes.Exam:
        stats = this.loadExamStats(topic);
        break;
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

  loadTopicProgress = async (topicId: string): Promise<number> => {
    const stats = await this.loadTopicStats(topicId);
    return Promise.resolve(stats.progressPercentage);
  };

  private loadExamStats(topic: Topic): TopicStats {
    const storeKeys: string[] = Object.keys(localStorage);
    let topicStats: ExamStats;
    if (storeKeys.includes(topic.id)) {
      topicStats = JSON.parse(localStorage.getItem(topic.id) ?? '');
    } else {
      const totalExerciseCount: number = topic.contents.filter(
        (content) => content.type === TopicContentTypes.MultipleOption
      ).length;

      topicStats = {
        topicId: topic.id,
        completedContentIds: [],
        progressPercentage: 0,
        contentCount: topic.contents.length,
        totalExercises: totalExerciseCount,
        correctExercises: 0,
      };
    }
    if (topicStats.contentCount != topic.contents.length) {
      topicStats.contentCount = topic.contents.length;
      topicStats.progressPercentage = 0;
      topicStats.completedContentIds = [];
    }

    return topicStats;
  }

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
