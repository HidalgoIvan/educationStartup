import { FunctionComponent, useEffect, useState } from 'react';
import { LSTopicStatsLoader } from '../../../controller/topicStats/LSTopicStatsLoader';
import { styled } from 'styled-components';
import Icon, { Icons } from '../../contentElements/Icon/Icon';
import { Link } from 'react-router-dom';
import { JSONTopicLoader } from '../../../controller/topic/JSONTopicLoader';

interface CourseListCardItemProps {
  topicId: string;
}

const statsLoader = new LSTopicStatsLoader();
const topicLoader = new JSONTopicLoader();

const CourseListCardItem: FunctionComponent<CourseListCardItemProps> = ({
  topicId,
}) => {
  const [progress, setProgress] = useState(0);
  const [description, setDescription] = useState('');

  useEffect(() => {
    statsLoader.loadTopicStats(topicId).then((stats) => {
      setProgress(Math.floor(stats.progressPercentage * 100));
    });
    topicLoader.loadTopic(topicId).then((topic) => setDescription(topic.title));
  }, [topicId]);

  const icon =
    progress < 40
      ? Icons.emptyMedal
      : progress < 60
      ? Icons.bronzeMedal
      : progress < 80
      ? Icons.silverMedal
      : Icons.goldMedal;

  return (
    <Container>
      <DescriptionContainer>{description}</DescriptionContainer>
      <ProgressContainer>
        <MedalContainer>
          <Icon icon={icon} />
        </MedalContainer>
        <ProgressBarContainer percentage={progress}></ProgressBarContainer>
        <Link to={`/topic/${topicId}`}>
          <OpenTopicButton>
            <Icon icon={Icons.play} />
          </OpenTopicButton>
        </Link>
      </ProgressContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const DescriptionContainer = styled.div`
  font-size: 1.4em;
  margin-bottom: 12px;
`;

const ProgressContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  height: 10vw;
`;

type ProgressBarContainerProps = {
  percentage: number;
};

const ProgressBarContainer = styled.div<ProgressBarContainerProps>`
  flex: 1;
  height: 40%;
  margin: 0 5%;
  border-radius: 1000px;
  background: ${(props) => `linear-gradient(
    90deg,
    var(--main-200) 0%,
    var(--main-200) ${props.percentage}%,
    transparent ${props.percentage}%
  );`};
`;

const MedalContainer = styled.div`
  width: 10vw;
  height: 10vw;
`;

const OpenTopicButton = styled.div`
  width: 10vw;
  height: 10vw;
  background-color: var(--main-200);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
`;

export default CourseListCardItem;
