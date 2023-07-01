import { FunctionComponent, useEffect, useState } from 'react';
import FullScreenPage from '../../layouts/FullScreenPage/FullScreenPage';
import { useParams } from 'react-router';
import TopicRenderer from '../../components/TopicRenderer/TopicRenderer';
import { JSONTopicLoader } from '../../controller/topic/JSONTopicLoader';
import { Topic } from '../../model/topic/Topic';

interface TopicContentPageProps {}
const topicLoader = new JSONTopicLoader();

const TopicPage: FunctionComponent<TopicContentPageProps> = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [topic, setTopic] = useState<Topic>();

  useEffect(() => {
    topicLoader.loadTopic(topicId).then((t) => setTopic(t));
  }, [topicId]);

  return !topic ? (
    <></>
  ) : (
    <FullScreenPage content={<TopicRenderer topic={topic} />} />
  );
};

export default TopicPage;
