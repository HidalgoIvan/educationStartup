import { TopicContent, TopicContentTypes } from './TopicContent';

export class EmptyContent extends TopicContent {
  constructor() {
    super({
      id: '',
      type: TopicContentTypes.EmptyContent,
      sections: [],
    });
  }
}
