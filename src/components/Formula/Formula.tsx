import { FunctionComponent } from 'react';
import { StaticMathField, addStyles } from 'react-mathquill';

interface FormulaProps {
  formula: string;
}

addStyles();

const Formula: FunctionComponent<FormulaProps> = ({ formula }) => {
  return (
    <StaticMathField
      mathquillDidMount={(mathField) => {
        mathField.latex(formula);
      }}
    />
  );
};

export default Formula;
