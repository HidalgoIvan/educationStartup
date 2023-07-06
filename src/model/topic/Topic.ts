import { TopicContent } from './content/TopicContent';

export enum TopicTypes {
  RandomPool,
  Exam,
  Tutorial,
  NotFound,
}

type TopicProps = {
  id: string;
  type: TopicTypes;
  title: string;
  description: string;
  contents: TopicContent[];
};

export class Topic {
  id: string;
  type: TopicTypes;
  title: string;
  description: string;
  contents: TopicContent[];

  constructor(props: TopicProps) {
    this.id = props.id;
    this.type = props.type;
    this.title = props.title;
    this.description = props.description;
    this.contents = props.contents;
  }
}
