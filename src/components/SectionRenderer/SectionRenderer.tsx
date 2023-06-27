import { FunctionComponent } from 'react';
import {
  TopicSection,
  TopicSectionTypes,
} from '../../model/topic/section/TopicSection';
import { FormulaSection } from '../../model/topic/section/FormulaSection';
import Formula from '../contentElements/Formula/Formula';
import Paragraph from '../contentElements/Paragraph/Paragraph';
import { ParagraphSection } from '../../model/topic/section/ParagraphSection';
import PlotGraph from '../contentElements/PlotGraph/PlotGraph';
import { PlotSection } from '../../model/topic/section/PlotSection';
import ContentBox from '../contentElements/ContentBox/ContentBox';
import { TextBoxSection } from '../../model/topic/section/TextBoxSection';
import FormulaContainer from '../contentElements/FormulaContainer/FormulaContainer';
import Image from '../contentElements/Image/Image';
import { ImageSection } from '../../model/topic/section/ImageSection';

interface SectionRendererProps {
  section: TopicSection;
}

const SectionRenderer: FunctionComponent<SectionRendererProps> = ({
  section,
}) => {
  switch (section.type) {
    case TopicSectionTypes.Formula:
      return <FormulaContainer formula={(section as FormulaSection).formula} />;
    case TopicSectionTypes.Plot:
      return <PlotGraph formulas={(section as PlotSection).formulas} />;
    case TopicSectionTypes.TextBox:
      return <ContentBox text={(section as TextBoxSection).text} />;
    case TopicSectionTypes.Paragraph:
      return <Paragraph text={(section as ParagraphSection).text} />;
    case TopicSectionTypes.Image:
      return <Image fileName={(section as ImageSection).fileName} />;
  }
};

export default SectionRenderer;
