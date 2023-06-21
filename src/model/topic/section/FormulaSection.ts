import { TopicSection, TopicSectionTypes } from './TopicSection';

export class FormulaSection extends TopicSection {
  formula: string;
  constructor(type: TopicSectionTypes, formula: string) {
    super(type);
    this.formula = formula;
  }
}
