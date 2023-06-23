import { FunctionComponent } from 'react';
import { TopicContentCard } from '../TopicContentCard/TopicContentCard';

import styled from 'styled-components';
import MultipleChoiceExercise from '../MultipleChoiceExercise/MultipleChoiceExercise';
import { Topic } from '../../model/topic/Topic';
import { MultipleOptionContent } from '../../model/topic/content/MultipleOptionContent';
import { RandomPoolStatsController } from '../../model/topic/stats/RandomPoolStatsController';
import ProgressBar from '../Progressbar/Progressbar';

interface RandomPoolProps {
  topic: Topic;
  controller: RandomPoolStatsController;
  exercise: MultipleOptionContent;
  onCorrectAnswer: AnswerChoiceHandler;
  onWrongAnswer: AnswerChoiceHandler;
  onContinue: () => void;
}

export type AnswerChoiceHandler = (exerciseId: string) => void;

const RandomPool: FunctionComponent<RandomPoolProps> = ({
  topic,
  controller,
  exercise,
  onCorrectAnswer,
  onWrongAnswer,
  onContinue,
}) => {
  return (
    <TopicContentCard>
      <ProgressBar progressPercentage={controller.stats.progressPercentage} />
      <CardTitle>{topic.title}</CardTitle>
      <MultipleChoiceExercise
        onCorrectAnswer={() => onCorrectAnswer(exercise.id)}
        onWrongAnswer={() => onWrongAnswer(exercise.id)}
        multipleOptionContent={exercise as MultipleOptionContent}
        onContinue={onContinue}
      />
    </TopicContentCard>
  );
};

const CardTitle = styled.div`
  font-size: 1.5em;
  color: var(--main-300);
`;

export default RandomPool;
