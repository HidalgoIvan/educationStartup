import { AnswerOption } from '../../answer/AnswerOption';
import { TopicSection } from '../section/TopicSection';
import { TopicContent, TopicContentTypes } from './TopicContent';

export class MultipleOptionContent extends TopicContent {
  id: string;
  sections: TopicSection[];
  options: AnswerOption[];

  constructor(
    id: string,
    type: TopicContentTypes,
    sections: TopicSection[],
    options: AnswerOption[]
  ) {
    super(type);
    this.id = id;
    this.sections = sections;
    this.options = options;
  }
}
