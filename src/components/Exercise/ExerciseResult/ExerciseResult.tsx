import { FunctionComponent } from 'react';
import { ExerciseContainer } from '../ExerciseContainer';
import { ExerciseData } from '../../../types/ExerciseTypes/ExerciseTypes';
import { ExerciseTextContainer } from '../ExerciseTextContainer';
import { styled } from 'styled-components';

interface ExerciseResultProps {
  exerciseData: ExerciseData;
  correct: boolean;
  onContinueClick: () => any;
}

interface IncorrectResultProps {
  exerciseData: ExerciseData;
  onContinueClick: () => any;
}

interface CorrectResultProps {
  onContinueClick: () => any;
}
const ExerciseResult: FunctionComponent<ExerciseResultProps> = ({
  exerciseData,
  correct,
  onContinueClick,
}) => {
  return (
    <ExerciseContainer>
      {correct ? (
        <CorrectResult onContinueClick={onContinueClick} />
      ) : (
        <IncorrectResult
          exerciseData={exerciseData}
          onContinueClick={onContinueClick}
        />
      )}
    </ExerciseContainer>
  );
};

const CorrectResult: FunctionComponent<CorrectResultProps> = ({
  onContinueClick,
}) => {
  return (
    <ExerciseContainer>
      <ExerciseTextContainer>¡Fantástico!</ExerciseTextContainer>
      <ContinueButton onClick={onContinueClick}>¡Continuar!</ContinueButton>
    </ExerciseContainer>
  );
};

const IncorrectResult: FunctionComponent<IncorrectResultProps> = ({
  onContinueClick,
  exerciseData,
}) => {
  return (
    <ExerciseContainer>
      <ExerciseTextContainer>Uy... respuesta incorrecta</ExerciseTextContainer>
      <ExerciseTextContainer>{exerciseData.hint}</ExerciseTextContainer>
      <ContinueButton onClick={onContinueClick}>¡Continuar!</ContinueButton>
    </ExerciseContainer>
  );
};

const ContinueButton = styled.button`
  width: 80vw;
  height: 30vw;
  font-size: 2em;
  border-radius: 16px;
  margin: 40px 0;
  background-color: #2196f3;
  border: 3px solid white;
`;

export default ExerciseResult;
