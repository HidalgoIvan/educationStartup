import { FunctionComponent, ReactElement, useState } from 'react';
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
import Paragraph from '../Paragraph/Paragraph';
import ContentBox from '../ContentBox/ContentBox';

interface MultipleChoiceExerciseProps {
  multipleOptionContent: MultipleOptionContent;
  onCorrectAnswer: () => void;
  onWrongAnswer: () => void;
  onContinue: () => void;
}

const MultipleChoiceExercise: FunctionComponent<
  MultipleChoiceExerciseProps
> = ({ multipleOptionContent, onCorrectAnswer, onWrongAnswer, onContinue }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');
  const handleAnswer = (option: AnswerOption) => {
    if (selectedAnswer) {
      return;
    }
    option.correct ? onCorrectAnswer() : onWrongAnswer();
    setSelectedAnswer(option.value);
  };

  const getOptionButton = (option: AnswerOption): ReactElement => {
    const content = option.formula ? (
      <Formula formula={option.formula} />
    ) : (
      option.value
    );
    return (
      <OptionButton
        key={nanoid()}
        style={{ background: option.correct ? 'blue' : 'orange' }}
        state={
          selectedAnswer === option.value
            ? option.correct
              ? OptionButtonState.Correct
              : OptionButtonState.Wrong
            : OptionButtonState.NotSelected
        }
        onClick={() => handleAnswer(option)}
      >
        {content}
      </OptionButton>
    );
  };

  const getOptionRows = (options: AnswerOption[]): ReactElement[] => {
    const rows: ReactElement[] = [];
    for (let x = 0; x < options.length; x++) {
      rows.push(getOptionButton(options[x]));
    }
    return rows;
  };
  return (
    <>
      {multipleOptionContent.sections.map((section) => renderSection(section))}
      <OptionContainer>
        {getOptionRows(multipleOptionContent.options)}
      </OptionContainer>
      <ContinueButton
        disabled={!selectedAnswer}
        style={{ opacity: selectedAnswer ? 1 : 0 }}
        onClick={() => {
          setSelectedAnswer('');
          onContinue();
        }}
      >
        Continuar
      </ContinueButton>
    </>
  );
};
const renderSection = (section: TopicSection) => {
  switch (section.type) {
    case TopicSectionTypes.Formula:
      return (
        <ContentBox key={nanoid()}>
          <Formula formula={(section as FormulaSection).formula} />
        </ContentBox>
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

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 100%;
`;
enum OptionButtonState {
  NotSelected,
  Correct,
  Wrong,
}

interface OptionButtonProps {
  state: OptionButtonState;
}

const OptionButton = styled.button<OptionButtonProps>`
  height: 7vh;
  min-width: 24vw;
  flex: auto;
  color: white;
  font-size: 1.5em;
  background-color: ${(props) =>
    props.state === OptionButtonState.NotSelected
      ? 'var(--highlight)'
      : props.state === OptionButtonState.Correct
      ? 'green'
      : 'red'};
  padding: 0 5%;
  font-weight: bold;
  border-radius: 15px;
  margin: 12px 5vw;
`;

const ContinueButton = styled.button`
  font-size: 2em;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: var(--main-300);
`;

export default MultipleChoiceExercise;
