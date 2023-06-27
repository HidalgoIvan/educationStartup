import { Topic } from '../../model/topic/Topic';
import { TopicContent } from '../../model/topic/content/TopicContent';

interface TopicStateControllerBase {
  topic: Topic;
  getNextContent: () => TopicContent;
  onCorrectAnswer: (content: TopicContent) => void;
  onWrongAnswer: (content: TopicContent) => void;
  onContinue: (content: TopicContent) => void;
}
export default TopicStateControllerBase;
