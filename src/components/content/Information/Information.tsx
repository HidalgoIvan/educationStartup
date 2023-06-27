import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import SectionRenderer from '../../SectionRenderer/SectionRenderer';
import { TopicContent } from '../../../model/topic/content/TopicContent';

interface InformationProps {
  content: TopicContent;
  onContinue: (content: TopicContent) => void;
}

const Information: FunctionComponent<InformationProps> = ({
  content,
  onContinue,
}) => {
  return (
    <>
      {content.sections.map((section) => (
        <SectionRenderer key={nanoid()} section={section} />
      ))}
      <ContinueButton
        onClick={() => {
          onContinue(content);
        }}
      >
        Continuar
      </ContinueButton>
    </>
  );
};

const ContinueButton = styled.button`
  font-size: 2em;
  padding: 12px 20px;
  border-radius: 10px;
  background-color: var(--main-300);
  margin: 3% 0 5% 0;
`;

export default Information;
