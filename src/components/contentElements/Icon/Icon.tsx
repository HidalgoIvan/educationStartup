import { FunctionComponent } from 'react';
import exam from '../../../assets/icons/exam.svg';
import graphLimit from '../../../assets/icons/graphLimit.svg';
import home from '../../../assets/icons/home.svg';

export enum Icons {
  exam = 'exam',
  graphLimit = 'graphLimit',
  home = 'home',
}
interface IconProps {
  icon: Icons;
}

type IconDict = {
  [key: string]: string;
};

const iconDict: IconDict = {
  [Icons.exam]: exam,
  [Icons.graphLimit]: graphLimit,
  [Icons.home]: home,
};

const Icon: FunctionComponent<IconProps> = ({ icon }) => {
  return <img src={iconDict[icon]} alt={`${icon} icon`} />;
};

export default Icon;
