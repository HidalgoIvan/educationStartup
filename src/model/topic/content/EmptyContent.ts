import { TopicContent, TopicContentTypes } from './TopicContent';

export class EmptyContent extends TopicContent {
  constructor() {
    super(TopicContentTypes.EmptyContent);
  }
}
