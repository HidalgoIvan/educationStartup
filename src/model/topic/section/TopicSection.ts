export enum TopicSectionTypes {
  Paragraph,
  Formula,
}

export class TopicSection {
  type: TopicSectionTypes;

  constructor(type: TopicSectionTypes) {
    this.type = type;
  }
}
