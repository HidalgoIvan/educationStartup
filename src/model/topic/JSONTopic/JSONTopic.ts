export type JSONTopic = {
  id: string;
  type: string;
  title: string;
  content: JSONTopicContent[];
};

export type JSONTopicContent = {
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
  correct?: boolean;
};
