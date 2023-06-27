import { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import './styles.css';

interface ProgressBarProps {
  progressPercentage: number;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({
  progressPercentage = 0,
}) => {
  return (
    <ProgressBarContainer>
      <ProgressChunk progressPercentage={progressPercentage} />
    </ProgressBarContainer>
  );
};

const ProgressBarContainer = styled.div`
  width: calc(100% - 15px);
  background-color: var(--content-100);
  height: 30px;
  border-radius: 100px;
  border: 3px solid white;
  display: flex;
  overflow: hidden;
`;
interface ProgressChunkBarProps {
  progressPercentage: number;
}

const ProgressChunk: FunctionComponent<ProgressChunkBarProps> = ({
  progressPercentage,
}) => {
  return (
    <ProgressChunkBar style={{ width: `calc(100% * ${progressPercentage})` }} />
  );
};

const ProgressChunkBar = styled.div`
  height: 100%;
  background: green;
  transition-duration: 0.3s;
`;

export default ProgressBar;
