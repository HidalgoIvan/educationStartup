import { Topic, TopicTypes } from '../../model/topic/Topic';
import { TopicLoader } from './TopicLoader';
import dmLimits1 from '../../assets/topics/demo/dmLimits1.json';
import {
  JSONTopic,
  JSONTopicContent,
  JSONTopicOption,
} from '../../model/topic/JSONTopic/JSONTopic';
import { TopicContent } from '../../model/topic/content/TopicContent';
import { TopicContentTypes } from '../../model/topic/content/TopicContent';
import { MultipleOptionContent } from '../../model/topic/content/MultipleOptionContent';
import {
  TopicSection,
  TopicSectionTypes,
} from '../../model/topic/section/TopicSection';
import { ParagraphSection } from '../../model/topic/section/ParagraphSection';
import { FormulaSection } from '../../model/topic/section/FormulaSection';
import { AnswerOption } from '../../model/answer/AnswerOption';

const topicJSONs: { [key: string]: JSONTopic } = {
  dmLimits1: dmLimits1,
};

export class JSONTopicLoader implements TopicLoader {
  loadTopic(topicId: string): Topic {
    if (!topicJSONs[topicId]) {
      return new Topic(topicId, TopicTypes.NotFound, '', []);
    }

    const json: JSONTopic = topicJSONs[topicId];
    const topicContents: TopicContent[] = [];

    json.content.forEach((content) => {
      const contentType =
        TopicContentTypes[content.type as keyof typeof TopicContentTypes];

      switch (contentType) {
        case TopicContentTypes.MultipleOption:
          topicContents.push(
            new MultipleOptionContent(
              contentType,
              this._loadContentSections(content),
              this._loadContentOptions(content.options ?? [])
            )
          );
          break;
        default:
          break;
      }
    });

    return new Topic(
      topicId,
      TopicTypes[json.type as keyof typeof TopicTypes],
      json.title,
      topicContents
    );
  }

  private _loadContentSections(content: JSONTopicContent): TopicSection[] {
    const sections: TopicSection[] = [];

    content.sections.forEach((section) => {
      const sectionType: TopicSectionTypes =
        TopicSectionTypes[section.type as keyof typeof TopicSectionTypes];
      switch (sectionType) {
        case TopicSectionTypes.Formula:
          sections.push(new FormulaSection(sectionType, section.formula ?? ''));
          break;
        case TopicSectionTypes.Paragraph:
        default:
          sections.push(new ParagraphSection(sectionType, section.text ?? ''));
          break;
      }
    });

    return sections;
  }

  private _loadContentOptions(json: JSONTopicOption[]): AnswerOption[] {
    const options: AnswerOption[] = [];
    json.forEach((jsonOption) => {
      options.push(new AnswerOption(jsonOption.value, jsonOption.correct));
    });
    return options;
  }
}
