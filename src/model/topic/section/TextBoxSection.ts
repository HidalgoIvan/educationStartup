import { TopicSection, TopicSectionTypes } from './TopicSection';

export class TextBoxSection extends TopicSection {
  text: string;
  constructor(text: string) {
    super(TopicSectionTypes.TextBox);
    this.text = text;
  }
}
