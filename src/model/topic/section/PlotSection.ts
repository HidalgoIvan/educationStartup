import { TopicSection, TopicSectionTypes } from './TopicSection';

export class PlotSection extends TopicSection {
  formulas: string[];
  constructor(formulas: string[]) {
    super(TopicSectionTypes.Plot);
    this.formulas = formulas;
  }
}
