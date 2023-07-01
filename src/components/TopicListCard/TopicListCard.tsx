import { FunctionComponent, useState } from 'react';
import { styled } from 'styled-components';
import { LSTopicStatsLoader } from '../../controller/topicStats/LSTopicStatsLoader';
import { TopicStats } from '../../model/topic/stats/TopicStats';
import { Link } from 'react-router-dom';
import Icon, { Icons } from '../contentElements/Icon/Icon';

interface TopicCardProps {
  title: string;
  description: string;
  icon: Icons;
  id: string;
}

const statsLoader = new LSTopicStatsLoader();

const TopicListCard: FunctionComponent<TopicCardProps> = ({
  title,
  description,
  icon,
  id,
}) => {
  const [progress, setProgress] = useState(0);
  statsLoader.loadTopicStats(id).then((stats: TopicStats) => {
    setProgress(Math.floor(stats.progressPercentage * 100));
  });

  return (
    <Card>
      <CardIcon>
        <Icon icon={Icons[icon]} />
      </CardIcon>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardControls>
          <TopicProgress>{progress}%</TopicProgress>
          <Link to={`/topic/${id}`} style={{}}>
            <OpenTopicButton>Ir</OpenTopicButton>
          </Link>
        </CardControls>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  margin-bottom: 5%;
  left: 0;
  margin-right: 5%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: white;
  color: #848689;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5% 5% 5% 3%;
`;

const CardIcon = styled.div`
  width: 50%;
  text-align: center;
  flex: 1;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  padding-left: 12px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  font-size: 1.4em;
  margin-bottom: 5%;
`;

const CardDescription = styled.div`
  margin-bottom: 5%;
`;

const CardControls = styled.div`
  display: flex;
  justify-content: space-evenly;
  color: white;
`;

const TopicProgress = styled.div`
  width: 9vw;
  height: 9vw;
  min-width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--highlight);
  font-weight: bold;
  font-size: 1.5em;
  padding: 15px;
  border-radius: 200px;
`;

const OpenTopicButton = styled.div`
  width: 9vw;
  height: 9vw;
  min-width: 70px;
  min-height: 70px;
  background-color: var(--main-200);
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  text-decoration: none;
`;

export default TopicListCard;
