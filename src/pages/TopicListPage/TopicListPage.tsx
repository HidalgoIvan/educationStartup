import FullScreenPage from '../../layouts/FullScreenPage/FullScreenPage';
import { styled } from 'styled-components';
import TopicListCard from '../../components/TopicListCard/TopicListCard';
import { JSONTopicListLoader } from '../../controller/topicList/JSONTopicListLoader';
import { TopicListLoader } from '../../controller/topicList/TopicListLoader';

const listLoader: TopicListLoader = new JSONTopicListLoader();

const TopicList: React.FC = () => {
  const topicList = listLoader.loadTopicList();

  return (
    <FullScreenPage
      header={<ListTitle>Ejercicios</ListTitle>}
      content={
        <List>
          {topicList.map((topic) => (
            <TopicListCard key={topic.title} {...topic} />
          ))}
        </List>
      }
    ></FullScreenPage>
  );
};

const ListTitle = styled.div`
  color: var(--main-300);
  font-weight: bold;
  font-size: 2em;
  text-align: center;
  margin: 5%;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  overflow: scroll;
`;

export default TopicList;
