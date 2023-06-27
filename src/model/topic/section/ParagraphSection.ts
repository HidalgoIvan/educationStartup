import { TopicSection, TopicSectionTypes } from './TopicSection';

export class ParagraphSection extends TopicSection {
  text: string;
  constructor(text: string) {
    super(TopicSectionTypes.Paragraph);
    this.text = text;
  }
}
