export enum TopicContentTypes {
  MultipleOption,
  EmptyContent,
}

export class TopicContent {
  type: TopicContentTypes;

  constructor(type: TopicContentTypes) {
    this.type = type;
  }
}
