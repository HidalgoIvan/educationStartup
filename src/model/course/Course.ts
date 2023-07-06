type CourseProps = {
  id: string;
  title: string;
  topicIds: string[];
  icon: string;
};

export class Course {
  id: string;
  title: string;
  topicIds: string[];
  icon: string;

  constructor(props: CourseProps) {
    this.id = props.id;
    this.title = props.title;
    this.topicIds = props.topicIds;
    this.icon = props.icon;
  }
}
