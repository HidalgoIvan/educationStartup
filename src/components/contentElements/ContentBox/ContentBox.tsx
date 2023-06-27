import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ContentBoxProps {
  text?: string;
  children?: React.ReactNode;
}

const ContentBox: FunctionComponent<ContentBoxProps> = ({ text, children }) => {
  return (
    <Box>
      {text}
      {children}
    </Box>
  );
};

const Box = styled.div`
  color: var(--main-300);
  width: 90%;
  text-align: center;
  background-color: var(--content-100);
  padding: 2% 5%;
  border-radius: 10px;
  font-size: 1.4em;
  font-weight: bold;
  margin: 4% 0;
`;
export default ContentBox;
