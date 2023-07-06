import { FunctionComponent } from 'react';
import exam from '../../../assets/icons/exam.svg';
import graphLimit from '../../../assets/icons/graphLimit.svg';
import home from '../../../assets/icons/home.svg';
import parabole from '../../../assets/icons/parabole.svg';
import minimum from '../../../assets/icons/minimum.svg';
import play from '../../../assets/icons/play.svg';
import bronzeMedal from '../../../assets/icons/bronzeMedal.svg';
import silverMedal from '../../../assets/icons/silverMedal.svg';
import goldMedal from '../../../assets/icons/goldMedal.svg';
import emptyMedal from '../../../assets/icons/emptyMedal.svg';
import trophy from '../../../assets/icons/trophy.svg';

import styled from 'styled-components';

export enum Icons {
  exam = 'exam',
  graphLimit = 'graphLimit',
  home = 'home',
  parabole = 'parabole',
  minimum = 'minimum',
  play = 'play',
  bronzeMedal = 'bronzeMedal',
  silverMedal = 'silverMedal',
  goldMedal = 'goldMedal',
  emptyMedal = 'emptyMedal',
  trophy = 'trophy',
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
  [Icons.parabole]: parabole,
  [Icons.minimum]: minimum,
  [Icons.play]: play,
  [Icons.bronzeMedal]: bronzeMedal,
  [Icons.silverMedal]: silverMedal,
  [Icons.goldMedal]: goldMedal,
  [Icons.emptyMedal]: emptyMedal,
  [Icons.trophy]: trophy,
};

const Icon: FunctionComponent<IconProps> = ({ icon }) => {
  return <Img src={iconDict[icon]} alt={`${icon} icon`} />;
};

const Img = styled.img`
  height: inherit;
`;

export default Icon;
