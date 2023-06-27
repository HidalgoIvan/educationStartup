import { AnswerOption } from '../../answer/AnswerOption';
import { TopicSection } from '../section/TopicSection';
import { TopicContent, TopicContentTypes } from './TopicContent';

type MultipleOptionContentProps = {
  id: string;
  sections: TopicSection[];
  options: AnswerOption[];
};

export class MultipleOptionContent extends TopicContent {
  options: AnswerOption[];

  constructor(props: MultipleOptionContentProps) {
    super({
      id: props.id,
      type: TopicContentTypes.MultipleOption,
      sections: props.sections,
    });
    this.options = props.options;
  }
}
