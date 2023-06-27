import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children?: React.ReactNode;
  text?: string;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ text, children }) => {
  return (
    <ParagraphContainer>
      {text}
      {children}
    </ParagraphContainer>
  );
};

const ParagraphContainer = styled.div`
  width: 90%;
  color: var(--content-200);
  font-size: 1.2em;
  text-align: center;
`;

export default Paragraph;
