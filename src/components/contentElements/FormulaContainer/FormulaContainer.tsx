import { FunctionComponent } from 'react';
import styled from 'styled-components';
import Formula from '../Formula/Formula';

interface FormulaContianerProps {
  formula: string;
}

const FormulaContainer: FunctionComponent<FormulaContianerProps> = ({
  formula,
}) => {
  return (
    <Container>
      <Formula formula={formula} />
    </Container>
  );
};

const Container = styled.div`
  color: var(--main-300);
  text-align: center;
  background-color: var(--content-100);
  padding: 2% 5%;
  border-radius: 10px;
  font-size: 1.4em;
  font-weight: bold;
  margin: 4% 0;
`;

export default FormulaContainer;
