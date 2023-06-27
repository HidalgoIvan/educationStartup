import { TopicSection, TopicSectionTypes } from './TopicSection';

export class ImageSection extends TopicSection {
  fileName: string;
  constructor(fileName: string) {
    super(TopicSectionTypes.Image);
    this.fileName = fileName;
  }
}
