export type JSONTopic = {
  id: string;
  type: string;
  title: string;
  description: string;
  content: JSONTopicContent[];
};

export type JSONTopicContent = {
  id: string;
  type: string;
  sections: {
    type: string;
    text?: string;
    formula?: string;
    formulas?: string[];
    fileName?: string;
  }[];
  options?: JSONTopicOption[];
};

export type JSONTopicOption = {
  value: string | number;
  formula?: string;
  correct?: boolean;
};
