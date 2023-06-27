import { Topic } from '../../model/topic/Topic';
import { TopicContent } from '../../model/topic/content/TopicContent';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import { TutorialStatsController } from '../../model/topic/stats/TutorialStatsController';
import TopicStateControllerBase from './TopicStateControllerBase';

type TutorialStateControllerProps = {
  topic: Topic;
  stats: TopicStats;
  onStatsChanged: (stats: TopicStats) => void;
  onContinue: (content: TopicContent) => void;
};

export class TutorialStateController implements TopicStateControllerBase {
  topic: Topic;
  statsController: TutorialStatsController;
  onContinue: (content: TopicContent) => void;

  constructor(props: TutorialStateControllerProps) {
    this.topic = props.topic;
    this.statsController = new TutorialStatsController({
      stats: props.stats,
      onStatsChanged: props.onStatsChanged,
    });
    this.onContinue = props.onContinue;
  }

  getNextContent = () => {
    for (const content of this.topic.contents) {
      if (!this.statsController.isContentComplete(content.id)) {
        return content;
      }
    }
    return this.topic.contents[0];
  };

  addCompletedContent = (content: TopicContent) => {
    this.statsController.addCompletedContent(content);
  };

  onCorrectAnswer = (content: TopicContent) => null;

  onWrongAnswer = (content: TopicContent) => null;
}
