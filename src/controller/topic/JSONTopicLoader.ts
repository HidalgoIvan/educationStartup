import { Topic, TopicTypes } from '../../model/topic/Topic';
import { TopicLoader } from './TopicLoader';
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
import { PlotSection } from '../../model/topic/section/PlotSection';
import { InformationContent } from '../../model/topic/content/InformationContent';
import { TextBoxSection } from '../../model/topic/section/TextBoxSection';
import { ImageSection } from '../../model/topic/section/ImageSection';

type JSONTopicDictionary = {
  [key: string]: JSONTopic;
};

export class JSONTopicLoader implements TopicLoader {
  async loadTopicDictionary(): Promise<JSONTopicDictionary> {
    const dataFolder = import.meta.glob('../../assets/topics/demo/*.json');
    const result: JSONTopicDictionary = {};
    for (const module of Object.values(dataFolder)) {
      const JSONTopic: JSONTopic = (await module()) as JSONTopic;
      result[JSONTopic.id] = JSONTopic;
    }
    return result;
  }

  async loadTopic(topicId: string): Promise<Topic> {
    const topicJSONs: JSONTopicDictionary = await this.loadTopicDictionary();

    if (!topicJSONs[topicId]) {
      return new Promise((resolve) => {
        resolve(this._getEmptyTopic());
      });
    }

    const json: JSONTopic = topicJSONs[topicId];
    const topicContents: TopicContent[] = [];

    json.content.forEach((content) => {
      const contentType =
        TopicContentTypes[content.type as keyof typeof TopicContentTypes];

      switch (contentType) {
        case TopicContentTypes.Information:
          topicContents.push(
            new InformationContent({
              id: content.id,
              sections: this._loadContentSections(content),
            })
          );
          break;
        case TopicContentTypes.MultipleOption:
          topicContents.push(
            new MultipleOptionContent({
              id: content.id,
              sections: this._loadContentSections(content),
              options: this._loadContentOptions(content.options ?? []),
            })
          );
          break;
        default:
          break;
      }
    });

    return new Topic({
      id: topicId,
      type: TopicTypes[json.type as keyof typeof TopicTypes],
      title: json.title,
      description: json.description,
      contents: topicContents,
    });
  }

  private _loadContentSections(content: JSONTopicContent): TopicSection[] {
    const sections: TopicSection[] = [];

    content.sections.forEach((section) => {
      const sectionType: TopicSectionTypes =
        TopicSectionTypes[section.type as keyof typeof TopicSectionTypes];
      switch (sectionType) {
        case TopicSectionTypes.TextBox:
          sections.push(new TextBoxSection(section.text ?? ''));
          break;
        case TopicSectionTypes.Formula:
          sections.push(new FormulaSection(section.formula ?? ''));
          break;
        case TopicSectionTypes.Plot:
          sections.push(new PlotSection(section.formulas ?? []));
          break;
        case TopicSectionTypes.Image:
          sections.push(new ImageSection(section.fileName ?? ''));
          break;
        case TopicSectionTypes.Paragraph:
          sections.push(new ParagraphSection(section.text ?? ''));
          break;
      }
    });

    return sections;
  }

  private _loadContentOptions(json: JSONTopicOption[]): AnswerOption[] {
    const options: AnswerOption[] = [];
    json.forEach((jsonOption) => {
      options.push(
        new AnswerOption(
          jsonOption.value,
          jsonOption.correct,
          jsonOption.formula
        )
      );
    });
    return options;
  }

  private _getEmptyTopic(): Topic {
    return new Topic({
      id: '',
      type: TopicTypes.NotFound,
      title: '',
      description: '',
      contents: [],
    });
  }
}
