export enum TopicSectionTypes {
  Paragraph,
  TextBox,
  Formula,
  Plot,
  Image,
}

export class TopicSection {
  type: TopicSectionTypes;

  constructor(type: TopicSectionTypes) {
    this.type = type;
  }
}
