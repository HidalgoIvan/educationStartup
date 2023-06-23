export interface TopicStats {
  topicId: string;
  progressPercentage: number;
}

export const getEmptyTopicStats = (): TopicStats => {
  return {
    topicId: '',
    progressPercentage: 0,
  };
};
