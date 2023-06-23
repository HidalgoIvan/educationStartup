import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  children: React.ReactNode;
}

const ContentBox: FunctionComponent<ContentBoxProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

const Box = styled.div`
  color: var(--main-300);
  background-color: var(--content-100);
  padding: 2% 5%;
  border-radius: 10px;
  font-size: 1.4em;
  font-weight: bold;
`;
export default ContentBox;
