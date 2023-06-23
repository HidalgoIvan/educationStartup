import { FunctionComponent, useEffect, useState } from 'react';
import { Topic } from '../../model/topic/Topic';
import {
  RandomPoolStats,
  RandomPoolStatsController,
} from '../../model/topic/stats/RandomPoolStatsController';
import { LSTopicStatsLoader } from '../../controller/topicStats/LSTopicStatsLoader';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import CourseCompleteCard from '../CourseCompleteCard/CourseCompleteCard';
import RandomPool from './RandomPool';
import { MultipleOptionContent } from '../../model/topic/content/MultipleOptionContent';

interface RandomPoolStateManagerProps {
  topic: Topic;
}

const RandomPoolStateManager: FunctionComponent<
  RandomPoolStateManagerProps
> = ({ topic }) => {
  const allExercises = topic.contents as MultipleOptionContent[];

  const [statsController, setStatsController] =
    useState<RandomPoolStatsController>();
  const [progressPercentage, setProgressPercentage] = useState(0);
  const [exercise, setExercise] = useState(
    statsController?.pickRandomExercise(allExercises)
  );

  useEffect(() => {
    new LSTopicStatsLoader()
      .loadTopicStats(topic.id)
      .then((stats: TopicStats) => {
        const onStatsChange = (stats: RandomPoolStats) => {
          setProgressPercentage(stats.progressPercentage);
        };
        const controller = new RandomPoolStatsController(
          stats as RandomPoolStats,
          onStatsChange
        );
        setStatsController(controller);
        setExercise(controller.pickRandomExercise(allExercises));
      });
  }, []);

  const onCorrectAnswer = (exerciseId: string) => {
    statsController?.addCompletedExercise(exerciseId);
  };

  const onWrongAnswer = (exerciseId: string) => {
    const _ = exerciseId;
  };

  const handleContinue = () => {
    setExercise(statsController?.pickRandomExercise(allExercises));
  };

  if (!statsController || !exercise) {
    return <>Loading</>;
  }

  if (statsController.stats.progressPercentage >= 1) {
    return <CourseCompleteCard title={topic.title} />;
  }

  return (
    <RandomPool
      topic={topic}
      controller={statsController}
      exercise={exercise}
      onCorrectAnswer={onCorrectAnswer}
      onWrongAnswer={onWrongAnswer}
      onContinue={handleContinue}
    />
  );
};

export default RandomPoolStateManager;
