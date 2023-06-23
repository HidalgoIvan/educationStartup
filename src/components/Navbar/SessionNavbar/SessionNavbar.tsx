import type { FunctionComponent } from 'react';
import { styled } from 'styled-components';
import StreakCounter from '../NavbarControls/StreakCounter/StreakCounter';
import CoinCounter from '../NavbarControls/CoinCounter/CoinCounter';

interface SessionNavbarProps {
  currentStep: number;
  totalSteps: number;
  currentStreak: number;
  totalCoins: number;
}

const SessionNavbar: FunctionComponent<SessionNavbarProps> = ({
  totalSteps,
  currentStreak,
  totalCoins,
}) => {
  return (
    <NavbarContainer>
      <StreakCounter currentStreak={currentStreak} maxStreak={totalSteps} />
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
