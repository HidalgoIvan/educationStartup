import { FunctionComponent } from 'react';
import { NavbarControlContainer } from '../NavbarControlContainer';
import coins from '../../../../assets/images/coins.svg';

interface CoinCounterProps {
  totalCoins: number;
}

const CoinCounter: FunctionComponent<CoinCounterProps> = ({ totalCoins }) => {
  return (
    <NavbarControlContainer
      style={{
        backgroundImage: `url(${coins})`,
      }}
    >
      {totalCoins}
    </NavbarControlContainer>
  );
};

export default CoinCounter;
