import { TopicSection } from '../section/TopicSection';

export enum TopicContentTypes {
  MultipleOption,
  Information,
  EmptyContent,
}

export interface TopicContentProps {
  id: string;
  type: TopicContentTypes;
  sections: TopicSection[];
}

export class TopicContent {
  id: string;
  type: TopicContentTypes;
  sections: TopicSection[];

  constructor(props: TopicContentProps) {
    this.id = props.id;
    this.type = props.type;
    this.sections = props.sections;
  }
}
