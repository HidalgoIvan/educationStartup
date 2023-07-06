import { Course } from '../../model/course/Course';

export interface CourseLoader {
  loadCourses(): Course[];
}
