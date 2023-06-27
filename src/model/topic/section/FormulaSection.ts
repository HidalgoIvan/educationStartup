import { TopicSection, TopicSectionTypes } from './TopicSection';

export class FormulaSection extends TopicSection {
  formula: string;
  constructor(formula: string) {
    super(TopicSectionTypes.Formula);
    this.formula = formula;
  }
}
