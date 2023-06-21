import { AnswerOption } from '../../answer/AnswerOption';
import { TopicSection } from '../section/TopicSection';
import { TopicContent, TopicContentTypes } from './TopicContent';

export class MultipleOptionContent extends TopicContent {
  sections: TopicSection[];
  options: AnswerOption[];

  constructor(
    type: TopicContentTypes,
    sections: TopicSection[],
    options: AnswerOption[]
  ) {
    super(type);
    this.sections = sections;
    this.options = options;
  }
}
