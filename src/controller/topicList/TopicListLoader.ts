import { TopicListItem } from '../../model/topic/list/TopicListItem';

export interface TopicListLoader {
  loadTopicList(): TopicListItem[];
}
