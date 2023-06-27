import { FunctionComponent } from 'react';
import { TopicContentCard } from '../TopicContentCard/TopicContentCard';
import Paragraph from '../contentElements/Paragraph/Paragraph';
import ContentBox from '../contentElements/ContentBox/ContentBox';
import { styled } from 'styled-components';
import { IonItem } from '@ionic/react';
import ProgressBar from '../Progressbar/Progressbar';
import { Link } from 'react-router-dom';

interface CourseCompleteCardProps {
  title: string;
}

const CourseCompleteCard: FunctionComponent<CourseCompleteCardProps> = ({
  title,
}) => {
  return (
    <TopicContentCard>
      <ContentWrapper>
        <ProgressBar progressPercentage={1} />
        <Paragraph>¡Felicidades!</Paragraph>
        <ContentBox>{title}</ContentBox>
        <Paragraph>Has completado este curso</Paragraph>
        <Link to={'/'}>
          <ReturnButton>Regresar</ReturnButton>
        </Link>
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

const ReturnButton = styled.button`
  background-color: var(--highlight);
  font-size: 2em;
  padding: 12px 18px;
  border-radius: 12px;
`;

export default CourseCompleteCard;
