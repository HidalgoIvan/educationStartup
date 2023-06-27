import { TopicListItem } from '../../model/topic/list/TopicListItem';
import { TopicListLoader } from './TopicListLoader';
import topicList from '../../assets/topics/topicsList.json';
import { Icons } from '../../components/contentElements/Icon/Icon';

export class JSONTopicListLoader implements TopicListLoader {
  loadTopicList(): TopicListItem[] {
    const result: TopicListItem[] = [];
    topicList.forEach((jsonTopic) => {
      jsonTopic.icon;
      result.push(
        new TopicListItem(
          jsonTopic.id,
          jsonTopic.title,
          jsonTopic.description,
          Icons[jsonTopic.icon as keyof typeof Icons]
        )
      );
    });
    return result;
  }
}
