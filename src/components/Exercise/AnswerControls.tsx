import { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import { ExerciseOption } from '../../types/ExerciseTypes/ExerciseTypes';

interface AnswerControlsProps {
  options: ExerciseOption[];
  onAnswerClick: (option: ExerciseOption) => any;
}

const AnswerControls: FunctionComponent<AnswerControlsProps> = ({
  options,
  onAnswerClick,
}) => {
  return (
    <ControlContainer className="answerControlContainer">
      {options.map((option, index) => {
        return (
          <AnswerButton key={index} onClick={() => onAnswerClick(option)}>
            {option.value}
          </AnswerButton>
        );
      })}
    </ControlContainer>
  );
};

const ControlContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  width: 100%;
  height: 30vh;
  gap: 12px;
  padding: 10px 20px 36px 20px;
`;

const AnswerButton = styled.button`
  border-radius: 10px;
  font-weight: bold;
`;

export default AnswerControls;
