import { FunctionComponent } from 'react';
import { TopicContentCard } from '../TopicContentCard/TopicContentCard';
import Paragraph from '../contentElements/Paragraph/Paragraph';
import ContentBox from '../contentElements/ContentBox/ContentBox';
import { styled } from 'styled-components';
import ProgressBar from '../Progressbar/Progressbar';
import { Link } from 'react-router-dom';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import { ExamStats } from '../../model/topic/stats/ExamStats';

interface CourseCompleteCardProps {
  title: string;
  stats: TopicStats;
}

const CourseCompleteCard: FunctionComponent<CourseCompleteCardProps> = ({
  title,
  stats,
}) => {
  let score = <></>;
  console.log(stats, typeof stats);
  if ('correctExercises' in stats) {
    score = (
      <Paragraph>
        {` Calificación: ${stats.correctExercises}/${
          (stats as ExamStats).totalExercises
        }`}
      </Paragraph>
    );
  }

  return (
    <TopicContentCard>
      <ContentWrapper>
        <ProgressBar progressPercentage={1} />
        <Paragraph>¡Felicidades!</Paragraph>
        <ContentBox>{title}</ContentBox>
        <Paragraph>Has completado este curso</Paragraph>
        {score}
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
