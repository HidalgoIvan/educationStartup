import type { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import ProgressBar from '../../Progressbar/Progressbar';
import StreakCounter from '../NavbarControls/StreakCounter/StreakCounter';
import CoinCounter from '../NavbarControls/CoinCounter/CoinCounter';

interface SessionNavbarProps {
  currentStep: number;
  totalSteps: number;
  currentStreak: number;
  totalCoins: number;
}

const SessionNavbar: FunctionComponent<SessionNavbarProps> = ({
  currentStep,
  totalSteps,
  currentStreak,
  totalCoins,
}) => {
  return (
    <NavbarContainer>
      <StreakCounter currentStreak={currentStreak} maxStreak={totalSteps} />
      <ProgressBar totalSteps={totalSteps} progress={currentStep}></ProgressBar>
      <CoinCounter totalCoins={totalCoins} />
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 10vh;
  max-height: 150px;
  background-color: var(--primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default SessionNavbar;
