import { FunctionComponent, ReactElement } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Formula from '../Formula/Formula';
import {
  TopicSection,
  TopicSectionTypes,
} from '../../model/topic/section/TopicSection';
import { FormulaSection } from '../../model/topic/section/FormulaSection';
import { ParagraphSection } from '../../model/topic/section/ParagraphSection';
import { MultipleOptionContent } from '../../model/topic/content/MultipleOptionContent';
import { AnswerOption } from '../../model/answer/AnswerOption';

interface MultipleChoiceExerciseProps {
  multipleOptionContent: MultipleOptionContent;
}

const MultipleChoiceExercise: FunctionComponent<
  MultipleChoiceExerciseProps
> = ({ multipleOptionContent }) => {
  const content = multipleOptionContent.sections.map((section) =>
    renderSection(section)
  );
  return (
    <>
      {content}
      <OptionContainer>
        {getOptionRows(multipleOptionContent.options)}
      </OptionContainer>
      <ContinueButton>Continuar</ContinueButton>
    </>
  );
};

const getOptionRows = (options: AnswerOption[]): ReactElement[] => {
  shuffleArray(options);
  const rows: ReactElement[] = [];
  for (let x = 0; x < options.length; x += 2) {
    rows.push(
      <OptionRow key={nanoid()}>
        <OptionButton>{options[x].value}</OptionButton>
        {x + 1 < options.length && (
          <OptionButton>{options[x + 1].value}</OptionButton>
        )}
      </OptionRow>
    );
  }
  return rows;
};

const renderSection = (section: TopicSection) => {
  switch (section.type) {
    case TopicSectionTypes.Formula:
      return (
        <FormulaContainer key={nanoid()}>
          <Formula formula={(section as FormulaSection).formula} />
        </FormulaContainer>
      );
    case TopicSectionTypes.Paragraph:
      return (
        <Paragraph key={nanoid()}>
          {(section as ParagraphSection).text}
        </Paragraph>
      );
    default:
      return <div key={nanoid()}></div>;
  }
};

function shuffleArray(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const Paragraph = styled.div`
  color: var(--content-200);
  font-size: 1.2em;
`;

const FormulaContainer = styled.div`
  color: var(--main-300);
  background-color: var(--content-100);
  padding: 2% 5%;
  border-radius: 10px;
  font-size: 1.4em;
  font-weight: bold;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
  width: -webkit-fill-available;
  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

const OptionRow = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 25px;
  justify-content: space-evenly;
`;

const OptionButton = styled.button`
  height: 7vh;
  width: 27vw;
  color: white;
  background-color: var(--highlight);
  padding: 0 5%;
  font-size: 2em;
  font-weight: bold;
  border-radius: 15px;
  @media (min-width: 900px) {
    width: 20vw;
    min-width: 20vw;
    height: 10vh;
  }
`;

const ContinueButton = styled.button`
  font-size: 2em;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: var(--main-300);
`;

export default MultipleChoiceExercise;
