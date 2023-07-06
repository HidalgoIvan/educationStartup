import FullScreenPage from '../../layouts/FullScreenPage/FullScreenPage';
import { styled } from 'styled-components';
import CourseListCard from './CourseListCard/CourseListCard';
import { CourseLoader } from '../../controller/course/CourseLoader';
import { JSONCourseLoader } from '../../controller/course/JSONCourseLoader';
import { Course } from '../../model/course/Course';
import { Icons } from '../contentElements/Icon/Icon';
import SendResults from './SendResults';

const courseLoader: CourseLoader = new JSONCourseLoader();

const CourseList: React.FC = () => {
  const courseList: Course[] = courseLoader.loadCourses();

  return (
    <FullScreenPage
      header={<ListTitle>Mis cursos</ListTitle>}
      content={
        <List>
          {courseList.map((course) => (
            <CourseListCard
              key={course.id}
              title={course.title}
              icon={Icons[course.icon as keyof typeof Icons]}
              topicIds={course.topicIds}
            />
          ))}
          <SendResults />
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
`;

export default CourseList;
