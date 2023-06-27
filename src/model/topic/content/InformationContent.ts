import { TopicSection } from '../section/TopicSection';
import { TopicContent, TopicContentTypes } from './TopicContent';

type InformationContentProps = {
  id: string;
  sections: TopicSection[];
};

export class InformationContent extends TopicContent {
  constructor(props: InformationContentProps) {
    super({
      id: props.id,
      type: TopicContentTypes.Information,
      sections: props.sections,
    });
  }
}
