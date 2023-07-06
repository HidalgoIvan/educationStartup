import { FunctionComponent } from 'react';
import { LSTopicStatsLoader } from '../../controller/topicStats/LSTopicStatsLoader';

interface SendResultsProps {}

const statsLoader = new LSTopicStatsLoader();

const SendResults: FunctionComponent<SendResultsProps> = () => {
  return <>Enviar resultados</>;
};

export default SendResults;
