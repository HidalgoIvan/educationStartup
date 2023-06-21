import { TopicListItem } from '../../model/topic/list/TopicListItem';
import { TopicListLoader } from './TopicListLoader';
import topicList from '../../assets/topics/topics.json';

export class JSONTopicListLoader implements TopicListLoader {
  loadTopicList(): TopicListItem[] {
    const result: TopicListItem[] = [];
    topicList.forEach((jsonTopic) => {
      result.push(
        new TopicListItem(
          jsonTopic.id,
          jsonTopic.title,
          jsonTopic.description,
          jsonTopic.icon
        )
      );
    });
    return result;
  }
}
