import { TopicContent } from './content/TopicContent';

export enum TopicTypes {
  RandomPool,
  Tutorial,
  NotFound,
}

export class Topic {
  id: string;
  type: TopicTypes;
  title: string;
  contents: TopicContent[];

  constructor(
    id: string,
    type: TopicTypes,
    title: string,
    contents: TopicContent[]
  ) {
    this.id = id;
    this.type = type;
    this.title = title;
    this.contents = contents;
  }
}
