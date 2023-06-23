import { FunctionComponent } from 'react';
import { Topic, TopicTypes } from '../../model/topic/Topic';
import NotFound from '../NotFound/NotFound';
import RandomPoolStateManager from '../RandomPool/RandomPoolStateManager';

interface TopicContentRendererProps {
  topic: Topic;
}

const TopicContentRenderer: FunctionComponent<TopicContentRendererProps> = ({
  topic,
}) => {
  let content = <></>;
  switch (topic.type) {
    case TopicTypes.RandomPool:
      content = <RandomPoolStateManager topic={topic} />;
      break;
    default:
      content = <NotFound />;
  }
  return content;
};

export default TopicContentRenderer;
