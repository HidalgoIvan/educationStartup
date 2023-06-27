import { FunctionComponent, useState } from 'react';
import { StaticMathField, addStyles } from 'react-mathquill';

interface FormulaProps {
  formula: string;
}

addStyles();

const Formula: FunctionComponent<FormulaProps> = ({ formula }) => {
  const [ready, setReady] = useState(false);

  return (
    <StaticMathField
      mathquillDidMount={(mathField) => {
        mathField.latex(formula);
        if (!ready) {
          setReady(true);
        }
      }}
    />
  );
};

export default Formula;
