import { Topic } from '../../model/topic/Topic';
import { TopicContent } from '../../model/topic/content/TopicContent';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import { ExamStatsController } from '../../model/topic/stats/ExamStatsController';
import TopicStateControllerBase from './TopicStateControllerBase';

type ExamStateControllerProps = {
  topic: Topic;
  stats: TopicStats;
  onStatsChanged: (stats: TopicStats) => void;
  onContinue: (content: TopicContent) => void;
};

export class ExamStateController implements TopicStateControllerBase {
  topic: Topic;
  statsController: ExamStatsController;
  onContinue: (content: TopicContent) => void;

  constructor(props: ExamStateControllerProps) {
    console.log('hey');
    this.topic = props.topic;
    this.statsController = new ExamStatsController({
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

  onCorrectAnswer = (content: TopicContent) => {
    this.statsController.addCorrectAnswer();
  };

  onWrongAnswer = (content: TopicContent) => null;
}
