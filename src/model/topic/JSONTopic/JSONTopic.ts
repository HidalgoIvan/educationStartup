export type JSONTopic = {
  id: string;
  type: string;
  title: string;
  content: JSONTopicContent[];
};

export type JSONTopicContent = {
  id: string;
  type: string;
  sections: {
    type: string;
    text?: string;
    formula?: string;
  }[];
  options?: JSONTopicOption[];
};

export type JSONTopicOption = {
  value: string | number;
  formula?: string;
  correct?: boolean;
};
