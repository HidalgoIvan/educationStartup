import { Topic } from '../../model/topic/Topic';

export interface TopicLoader {
  loadTopic(topicId: string): Topic;
}
