import { FunctionComponent, useEffect, useState } from 'react';
import { Topic } from '../../../model/topic/Topic';
import { LSTopicStatsLoader } from '../../../controller/topicStats/LSTopicStatsLoader';
import { TopicStats } from '../../../model/topic/stats/TopicStats';
import CourseCompleteCard from '../../CourseCompleteCard/CourseCompleteCard';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import { TopicContent } from '../../../model/topic/content/TopicContent';
import TopicCardRenderer from '../TopicCardRenderer/TopicCardRenderer';
import { TutorialStateController } from '../../../controller/topicStateController/TutorialStateController';

interface TutorialProps {
  topic: Topic;
}

const TutorialStateManager: FunctionComponent<TutorialProps> = ({ topic }) => {
  const [stateController, setStateController] =
    useState<TutorialStateController>();
  const [content, setContent] = useState<TopicContent>();
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  useEffect(() => {
    new LSTopicStatsLoader()
      .loadTopicStats(topic.id)
      .then((stats: TopicStats) => {
        const controller = new TutorialStateController({
          topic: topic,
          stats: stats,
          onStatsChanged: (stats) => {
            setProgressPercentage(stats.progressPercentage);
          },
          onContinue: handleContinue,
        });
        setStateController(controller);
        setContent(controller.getNextContent());
        setProgressPercentage(
          controller.statsController.stats.progressPercentage
        );
      });
  }, [topic]);

  const onCorrectAnswer = (content: TopicContent) => null;

  const onWrongAnswer = (content: TopicContent) => null;

  const handleContinue = (content: TopicContent) => {
    stateController?.addCompletedContent(content);
    setContent(stateController?.getNextContent());
  };

  if (!stateController) {
    return <>Cargando...</>;
  }

  if (stateController.statsController.stats.progressPercentage >= 1) {
    return <CourseCompleteCard title={topic.title} />;
  }

  return (
    <TopicCardRenderer
      topic={topic}
      progressPercentage={progressPercentage}
      exercise={content as MultipleOptionContent}
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
      onContinue={handleContinue}
    />
  );
};

export default TutorialStateManager;
