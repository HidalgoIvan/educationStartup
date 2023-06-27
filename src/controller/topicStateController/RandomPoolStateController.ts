import { Topic } from '../../model/topic/Topic';
import { TopicContent } from '../../model/topic/content/TopicContent';
import { RandomPoolStatsController } from '../../model/topic/stats/RandomPoolStatsController';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import TopicStateControllerBase from './TopicStateControllerBase';

type RandomPoolStateControllerProps = {
  topic: Topic;
  stats: TopicStats;
  onStatsChanged: (stats: TopicStats) => void;
  onContinue: (content: TopicContent) => void;
};

export class RandomPoolStateController implements TopicStateControllerBase {
  topic: Topic;
  statsController: RandomPoolStatsController;
  onContinue: (content: TopicContent) => void;

  constructor(props: RandomPoolStateControllerProps) {
    this.topic = props.topic;
    this.statsController = new RandomPoolStatsController({
      stats: props.stats,
      onStatsChanged: props.onStatsChanged,
    });
    this.onContinue = props.onContinue;
  }

  getNextContent = () => {
    const availableContent: TopicContent[] = this.topic.contents.filter(
      (c) => !this.statsController.stats.completedContentIds.includes(c.id)
    );
    return availableContent[~~(Math.random() * availableContent.length)];
  };

  onCorrectAnswer = (content: TopicContent) => {
    this.statsController.addCompletedContent(content);
  };

  onWrongAnswer = (content: TopicContent) => null;
}
