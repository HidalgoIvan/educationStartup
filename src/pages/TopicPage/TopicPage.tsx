import { FunctionComponent } from 'react';
import FullScreenPage from '../../layouts/FullScreenPage/FullScreenPage';
import { useParams } from 'react-router';
import TopicContentRenderer from '../../components/TopicContentRenderer/TopicContentRenderer';
import { JSONTopicLoader } from '../../controller/topic/JSONTopicLoader';
import { Topic } from '../../model/topic/Topic';

interface TopicContentPageProps {}
const topicLoader = new JSONTopicLoader();

const TopicPage: FunctionComponent<TopicContentPageProps> = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const topic: Topic = topicLoader.loadTopic(topicId);
  return <FullScreenPage content={<TopicContentRenderer topic={topic} />} />;
};

export default TopicPage;
