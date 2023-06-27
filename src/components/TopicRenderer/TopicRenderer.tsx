import { FunctionComponent } from 'react';
import { Topic, TopicTypes } from '../../model/topic/Topic';
import NotFound from '../NotFound/NotFound';
import RandomPoolStateManager from '../content/RandomPool/RandomPoolStateManager';
import TutorialStateManager from '../content/Tutorial/TutorialStateManager';

interface TopicRendererProps {
  topic: Topic;
}

const TopicRenderer: FunctionComponent<TopicRendererProps> = ({ topic }) => {
  let content = <></>;
  switch (topic.type) {
    case TopicTypes.RandomPool:
      content = <RandomPoolStateManager topic={topic} />;
      break;
    case TopicTypes.Tutorial:
      content = <TutorialStateManager topic={topic} />;
      break;
    default:
      content = <NotFound />;
  }
  return content;
};

export default TopicRenderer;
