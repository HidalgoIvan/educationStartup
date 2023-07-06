import { FunctionComponent } from 'react';
import { TopicContentCard } from '../../TopicContentCard/TopicContentCard';

import styled from 'styled-components';
import { Topic } from '../../../model/topic/Topic';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import ProgressBar from '../../Progressbar/Progressbar';
import { TopicContent } from '../../../model/topic/content/TopicContent';
import ContentRenderer from '../ContentRenderer/ContentRenderer';
import { Link } from 'react-router-dom';
import Icon, { Icons } from '../../contentElements/Icon/Icon';

interface TopicCardRendererProps {
  topic: Topic;
  progressPercentage: number;
  exercise: MultipleOptionContent;
  onCorrectAnswer: (content: TopicContent) => void;
  onWrongAnswer: (content: TopicContent) => void;
  onContinue: (content: TopicContent) => void;
}

const TopicCardRenderer: FunctionComponent<TopicCardRendererProps> = ({
  topic,
  progressPercentage,
  exercise,
  onCorrectAnswer,
  onWrongAnswer,
  onContinue,
}) => {
  return (
    <TopicContentCard>
      <ContentWrapper>
        <CardHeader>
          <HomeIconContainer>
            <Link to="/">
              <Icon icon={Icons.home} />
            </Link>
          </HomeIconContainer>
          <ProgressBar progressPercentage={progressPercentage} />
        </CardHeader>
        <CardTitle>{topic.title}</CardTitle>
        <ContentRenderer
          onCorrectAnswer={() => onCorrectAnswer(exercise)}
          onWrongAnswer={() => onWrongAnswer(exercise)}
          content={exercise as MultipleOptionContent}
          onContinue={onContinue}
        />
      </ContentWrapper>
    </TopicContentCard>
  );
};

const ContentWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 4%;
`;

const HomeIconContainer = styled.div`
  width: 10%;
  background-color: var(--main-300);
  margin: 0 3%;
  border-radius: 5px;
`;

const CardHeader = styled.div`
  width: 100%;
  padding: 0 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const CardTitle = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: var(--main-300);
  margin: 12px 0;
`;

export default TopicCardRenderer;
