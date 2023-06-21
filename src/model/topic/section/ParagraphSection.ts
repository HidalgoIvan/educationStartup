import { TopicSection, TopicSectionTypes } from './TopicSection';

export class ParagraphSection extends TopicSection {
  text: string;
  constructor(type: TopicSectionTypes, text: string) {
    super(type);
    this.text = text;
  }
}
