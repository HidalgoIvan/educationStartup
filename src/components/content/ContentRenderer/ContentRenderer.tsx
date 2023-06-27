import { FunctionComponent } from 'react';
import {
  TopicContent,
  TopicContentTypes,
} from '../../../model/topic/content/TopicContent';
import MultipleOption from '../MultipleOption/MultipleOption';
import { MultipleOptionContent } from '../../../model/topic/content/MultipleOptionContent';
import Information from '../Information/Information';

interface ContentRendererProps {
  content: TopicContent;
  onCorrectAnswer: (content: TopicContent) => void;
  onWrongAnswer: (content: TopicContent) => void;
  onContinue: (content: TopicContent) => void;
}

const ContentRenderer: FunctionComponent<ContentRendererProps> = ({
  content,
  onCorrectAnswer,
  onWrongAnswer,
  onContinue,
}) => {
  switch (content.type) {
    case TopicContentTypes.MultipleOption:
      return (
        <MultipleOption
          content={content as MultipleOptionContent}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
          onContinue={onContinue}
        />
      );
    case TopicContentTypes.Information:
      return <Information content={content} onContinue={onContinue} />;
    case TopicContentTypes.EmptyContent:
    default:
      return <div>?</div>;
  }
};

export default ContentRenderer;
