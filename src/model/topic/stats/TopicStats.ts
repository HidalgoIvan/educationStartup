export interface TopicStats {
  topicId: string;
  progressPercentage: number;
  contentCount: number;
  completedContentIds: string[];
}

export const getEmptyTopicStats = (): TopicStats => {
  return {
    topicId: '',
    progressPercentage: 0,
    contentCount: 0,
    completedContentIds: [],
  };
};
