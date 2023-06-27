import { FunctionComponent, ReactElement, useState } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Formula from '../../contentElements/Formula/Formula';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import { AnswerOption } from '../../../model/answer/AnswerOption';
import SectionRenderer from '../../SectionRenderer/SectionRenderer';
import { TopicContent } from '../../../model/topic/content/TopicContent';

interface MultipleChoiceExerciseProps {
  content: MultipleOptionContent;
  onCorrectAnswer: (content: TopicContent) => void;
  onWrongAnswer: (content: TopicContent) => void;
  onContinue: (content: TopicContent) => void;
}

const MultipleOption: FunctionComponent<MultipleChoiceExerciseProps> = ({
  content,
  onCorrectAnswer,
  onWrongAnswer,
  onContinue,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>('');
  const handleAnswer = (option: AnswerOption) => {
    if (selectedAnswer) {
      return;
    }
    option.correct ? onCorrectAnswer(content) : onWrongAnswer(content);
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
        //style={{ background: option.correct ? 'blue' : 'orange' }}
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
      {content.sections.map((section) => (
        <SectionRenderer key={nanoid()} section={section} />
      ))}
      <OptionContainer>{getOptionRows(content.options)}</OptionContainer>
      <ContinueButton
        disabled={content.options.length > 0 && !selectedAnswer}
        style={{ opacity: selectedAnswer ? 1 : 0 }}
        onClick={() => {
          setSelectedAnswer('');
          onContinue(content);
        }}
      >
        Continuar
      </ContinueButton>
    </>
  );
};

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
  overflow-x: auto;
  min-height: 7vh;
  min-width: 34vw;
  color: white;
  font-size: 1.5em;
  background-color: ${(props) =>
    props.state === OptionButtonState.NotSelected
      ? 'var(--highlight)'
      : props.state === OptionButtonState.Correct
      ? 'green'
      : 'red'};
  padding: 8px 5%;
  font-weight: bold;
  border-radius: 15px;
  margin: 12px 5vw;
`;

const ContinueButton = styled.button`
  font-size: 2em;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: var(--main-300);
  margin: 3% 0 5% 0;
`;

export default MultipleOption;
