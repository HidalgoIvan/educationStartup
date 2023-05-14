import { FunctionComponent } from 'react';
import { NavbarControlContainer } from '../NavbarControlContainer';
import fire from '../../../../assets/images/fire.svg';

interface StreakCounterProps {
  currentStreak: number;
  maxStreak: number;
}

const StreakCounter: FunctionComponent<StreakCounterProps> = ({
  currentStreak,
  maxStreak,
}) => {
  const filterIntensity = 1 - currentStreak / maxStreak;
  return (
    <NavbarControlContainer
      style={{
        backgroundImage: `url(${fire})`,
        filter: `grayscale(${filterIntensity})`,
      }}
    >
      {currentStreak}
    </NavbarControlContainer>
  );
};

export default StreakCounter;
