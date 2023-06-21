import { FunctionComponent } from 'react';
import RandomPool from '../RandomPool/RandomPool';
import { Topic, TopicTypes } from '../../model/topic/Topic';
import NotFound from '../NotFound/NotFound';

interface TopicContentRendererProps {
  topic: Topic;
}

const TopicContentRenderer: FunctionComponent<TopicContentRendererProps> = ({
  topic,
}) => {
  let content = <></>;
  switch (topic.type) {
    case TopicTypes.RandomPool:
      content = <RandomPool topic={topic} />;
      break;
    default:
      content = <NotFound />;
  }
  return content;
};

export default TopicContentRenderer;
