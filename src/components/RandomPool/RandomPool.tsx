import { FunctionComponent } from 'react';
import { TopicContentCard } from '../TopicContentCard/TopicContentCard';

import styled from 'styled-components';
import MultipleChoiceExercise from '../MultipleChoiceExercise/MultipleChoiceExercise';
import { Topic } from '../../model/topic/Topic';
import { MultipleOptionContent } from '../../model/topic/content/MultipleOptionContent';

interface RandomPoolProps {
  topic: Topic;
}

const RandomPool: FunctionComponent<RandomPoolProps> = ({ topic }) => {
  const exercises = topic.contents;
  const selectedExercise =
    exercises[Math.floor(Math.random() * exercises.length)];

  return (
    <TopicContentCard>
      <CardTitle>{topic.title}</CardTitle>
      <MultipleChoiceExercise
        multipleOptionContent={selectedExercise as MultipleOptionContent}
      />
    </TopicContentCard>
  );
};

const CardTitle = styled.div`
  font-size: 1.5em;
  color: var(--main-300);
`;

export default RandomPool;
