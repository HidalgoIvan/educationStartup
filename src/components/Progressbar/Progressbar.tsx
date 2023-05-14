import { FunctionComponent } from 'react';
import { css, styled } from 'styled-components';
import './styles.css';

interface ProgressBarProps {
  totalSteps: number;
  progress: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  totalSteps,
  progress,
}) => {
  return (
    <ProgressBarContainer className="progressBarContainer">
      <ProgressChunk sections={totalSteps} progress={progress}></ProgressChunk>
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 30px;
  border-radius: 100px;
  border: 3px solid white;
  display: flex;
  overflow: hidden;
`;

interface ProgressChunkProps {
  sections: number;
  progress: number;
}
const ProgressChunk = styled.div<ProgressChunkProps>`
  height: 100%;
  background: green;
  ${(props) => css`
    width: calc(100% * ${props.progress / props.sections});
  `}
  transition-duration: 0.4s;
`;

export default ProgressBar;
