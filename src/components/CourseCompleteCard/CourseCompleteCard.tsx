import { FunctionComponent } from 'react';
import { TopicContentCard } from '../TopicContentCard/TopicContentCard';
import Paragraph from '../Paragraph/Paragraph';
import ContentBox from '../ContentBox/ContentBox';
import { styled } from 'styled-components';
import { IonItem } from '@ionic/react';
import ProgressBar from '../Progressbar/Progressbar';

interface CourseCompleteCardProps {
  title: string;
}

const CourseCompleteCard: FunctionComponent<CourseCompleteCardProps> = ({
  title,
}) => {
  return (
    <TopicContentCard>
      <ProgressBar progressPercentage={1} />
      <Paragraph>¡Felicidades!</Paragraph>
      <ContentBox>{title}</ContentBox>
      <Paragraph>Has completado este curso</Paragraph>
      <IonItem routerLink={'/educationStartup/'}>
        <ReturnButton>Regresar</ReturnButton>
      </IonItem>
    </TopicContentCard>
  );
};

const ReturnButton = styled.button`
  background-color: var(--highlight);
  font-size: 2em;
  padding: 12px 18px;
  border-radius: 12px;
`;

export default CourseCompleteCard;
