import { FunctionComponent, useEffect, useState } from 'react';
import { Topic } from '../../../model/topic/Topic';
import { LSTopicStatsLoader } from '../../../controller/topicStats/LSTopicStatsLoader';
import { TopicStats } from '../../../model/topic/stats/TopicStats';
import CourseCompleteCard from '../../CourseCompleteCard/CourseCompleteCard';
import TopicCardRenderer from '../TopicCardRenderer/TopicCardRenderer';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import { RandomPoolStateController } from '../../../controller/topicStateController/RandomPoolStateController';
import { TopicContent } from '../../../model/topic/content/TopicContent';

interface RandomPoolStateManagerProps {
  topic: Topic;
}

const RandomPoolStateManager: FunctionComponent<
  RandomPoolStateManagerProps
> = ({ topic }) => {
  const [stateController, setStateController] =
    useState<RandomPoolStateController>();
  const [content, setContent] = useState<TopicContent>();
  const [progressPercentage, setProgressPercentage] = useState<number>(0);

  useEffect(() => {
    new LSTopicStatsLoader()
      .loadTopicStats(topic.id)
      .then((stats: TopicStats) => {
        const controller = new RandomPoolStateController({
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

  const onCorrectAnswer = (content: TopicContent) => {
    stateController?.onCorrectAnswer(content);
  };

  const onWrongAnswer = (content: TopicContent) => null;

  const handleContinue = () => {
    setContent(stateController?.getNextContent());
  };

  if (!stateController) {
    return <>Cargando...</>;
  }

  if (stateController.statsController.stats.progressPercentage >= 1) {
    return (
      <CourseCompleteCard
        title={topic.title}
        stats={stateController.statsController.stats}
      />
    );
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

export default RandomPoolStateManager;
