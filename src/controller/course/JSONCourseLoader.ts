import { Course } from '../../model/course/Course';
import { CourseLoader } from './CourseLoader';
import JSONCourses from '../../assets/courses/courses.json';

export class JSONCourseLoader implements CourseLoader {
  loadCourses(): Course[] {
    const result: Course[] = [];

    JSONCourses.forEach((course) => {
      result.push(
        new Course({
          id: course.id,
          title: course.title,
          topicIds: course.topicIds,
          icon: course.icon,
        })
      );
    });

    return result;
  }
}
