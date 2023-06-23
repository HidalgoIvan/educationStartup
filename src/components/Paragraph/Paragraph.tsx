import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph: FunctionComponent<ParagraphProps> = ({ children }) => {
  return <ParagraphContainer>{children}</ParagraphContainer>;
};

const ParagraphContainer = styled.div`
  color: var(--content-200);
  font-size: 1.2em;
  text-align: center;
`;

export default Paragraph;
