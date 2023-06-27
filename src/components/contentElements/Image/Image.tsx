/* eslint-disable @typescript-eslint/no-var-requires */
import { FunctionComponent } from 'react';
import styled from 'styled-components';
import limExample1 from '../../../assets/img/lim-example1.png';
import limExample2 from '../../../assets/img/lim-example2.png';

interface ImageProps {
  fileName: string;
}

type imageDict = { [key: string]: string };

const images: imageDict = {
  limExample1: limExample1,
  limExample2: limExample2,
};

const Image: FunctionComponent<ImageProps> = ({ fileName }) => {
  return <ImageElement src={images[fileName]} alt="imagen" />;
};

const ImageElement = styled.img`
  width: 90%;
  max-width: 600px;
`;

export default Image;
