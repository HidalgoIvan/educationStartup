import { TopicStats } from './TopicStats';

type TutorialStatsProps = {
  topicId: string;
  progressPercentage?: number;
  contentCount: number;
  completedContentIds?: string[];
};

export class TutorialStats implements TopicStats {
  topicId: string;
  progressPercentage: number;
  contentCount: number;
  completedContentIds: string[];

  constructor({
    topicId,
    progressPercentage = 0,
    contentCount,
    completedContentIds = [],
  }: TutorialStatsProps) {
    this.topicId = topicId;
    this.progressPercentage = progressPercentage;
    this.contentCount = contentCount;
    this.completedContentIds = completedContentIds;
  }
}
