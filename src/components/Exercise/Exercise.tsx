import { FunctionComponent } from 'react';
import { StaticMathField, addStyles } from 'react-mathquill';
import { styled } from 'styled-components';
import {
  ExerciseData,
  ExerciseOption,
} from '../../types/ExerciseTypes/ExerciseTypes';
import AnswerControls from './AnswerControls';
import { ExerciseContainer } from './ExerciseContainer';
import { ExerciseTextContainer } from './ExerciseTextContainer';

interface ExerciseProps {
  exerciseData: ExerciseData;
  onAnswerClick: (option: ExerciseOption) => any;
}

const Exercise: FunctionComponent<ExerciseProps> = ({
  exerciseData: data,
  onAnswerClick,
}) => {
  addStyles();
  return (
    <ExerciseContainer>
      <ExerciseTextContainer>{data.paragraph}</ExerciseTextContainer>
      <EquationContainer>
        <StaticMathField>{data.equation}</StaticMathField>
      </EquationContainer>
      <AnswerControls
        options={data.options}
        onAnswerClick={onAnswerClick}
      ></AnswerControls>
    </ExerciseContainer>
  );
};

const EquationContainer = styled.div`
  font-family: 'Times New Roman', Times, serif;
  padding: 12px;
  font-size: 2em;
  text-align: justify;
`;

const AnswerContainer = styled.div``;

export default Exercise;
