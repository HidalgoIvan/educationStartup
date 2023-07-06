import { FunctionComponent, useEffect, useState } from 'react';
import { Topic } from '../../../model/topic/Topic';
import { LSTopicStatsLoader } from '../../../controller/topicStats/LSTopicStatsLoader';
import { TopicStats } from '../../../model/topic/stats/TopicStats';
import CourseCompleteCard from '../../CourseCompleteCard/CourseCompleteCard';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import { TopicContent } from '../../../model/topic/content/TopicContent';
import TopicCardRenderer from '../TopicCardRenderer/TopicCardRenderer';
import { ExamStateController } from '../../../controller/topicStateController/ExamStateController';

interface ExamProps {
  topic: Topic;
}

const ExamStateManager: FunctionComponent<ExamProps> = ({ topic }) => {
  const [stateController, setStateController] = useState<ExamStateController>();
  const [content, setContent] = useState<TopicContent>();
  const [progressPercentage, setProgressPercentage] = useState<number>(0);
  const [selectedCorrect, setSelectedCorrect] = useState(false);

  useEffect(() => {
    new LSTopicStatsLoader()
      .loadTopicStats(topic.id)
      .then((stats: TopicStats) => {
        const controller = new ExamStateController({
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
    setSelectedCorrect(true);
  };

  const onWrongAnswer = (content: TopicContent) => {
    setSelectedCorrect(false);
  };

  const handleContinue = (content: TopicContent) => {
    stateController?.addCompletedContent(content);
    if (selectedCorrect) {
      stateController?.onCorrectAnswer(content);
    }
    setContent(stateController?.getNextContent());
    setSelectedCorrect(false);
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

export default ExamStateManager;
