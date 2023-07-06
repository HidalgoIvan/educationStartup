import { FunctionComponent, useEffect, useState } from 'react';
import { styled } from 'styled-components';
import Icon, { Icons } from '../../contentElements/Icon/Icon';
import CourseListCardItem from './CourseListCardItem';
import Collapsible from 'react-collapsible';
import { LSTopicStatsLoader } from '../../../controller/topicStats/LSTopicStatsLoader';

interface CourseListCardProps {
  title: string;
  icon: Icons;
  topicIds: string[];
}

const statsLoader = new LSTopicStatsLoader();

const CourseListCard: FunctionComponent<CourseListCardProps> = ({
  title,
  icon,
  topicIds,
}) => {
  const [progress, setProgress] = useState<string | undefined>();

  useEffect(() => {
    const loadStats = async () => {
      let total = 0;

      for await (const topicId of topicIds) {
        total += await statsLoader.loadTopicProgress(topicId);
      }

      total = Math.floor((total * 100) / topicIds.length);
      setProgress(`${total}%`);
    };
    loadStats();
  }, [topicIds]);

  return (
    <Card>
      <CardInfo>
        <Collapsible
          trigger={
            <CardTitleContainer>
              <CardIcon>
                <Icon icon={Icons[icon]} />
              </CardIcon>
              <CardTitle>{title}</CardTitle>
              <CardProgress>{progress}</CardProgress>
            </CardTitleContainer>
          }
          transitionTime={150}
        >
          <ItemsContainer>
            {topicIds.map((topicId) => (
              <CourseListCardItem key={topicId} topicId={topicId} />
            ))}
          </ItemsContainer>
        </Collapsible>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  margin: 5% 5% 5% 0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: white;
  color: #848689;
  justify-content: center;
  align-items: center;
  padding: 5% 4% 5% 3%;
`;

const CardIcon = styled.div`
  width: 15%;
  margin-right: 12px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardTitle = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 1.8em;
`;

const CardProgress = styled.div`
  width: 20%;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-weight: bold;
  font-size: 1.4em;
  border-radius: 500px;
  background-color: var(--highlight);
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 5%;
`;

export default CourseListCard;
