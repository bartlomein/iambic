import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  max-width: 1600px;
`;

export const RightTriangle = styled.div`
  width: 30%;
  height: 1200px;
  overflow: hidden;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-60deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: #5c258d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4389a2,
    #5c258d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4389a2,
    #5c258d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  top: 600px;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  right: 0;
  border-radius: 100px;
`;

export const TopLeftTriangle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: #bc4e9c; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f80759,
    #bc4e9c
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f80759,
    #bc4e9c
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  position: absolute;
  z-index: -1;
  border-radius: 50px;
`;

export const TopRightTriangle = styled.div`
  width: 100%;
  height: 50%;
  opacity: 0.7;
  overflow: hidden;
  -webkit-transform: skewY(21deg);
  transform: skewY(21deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f27121,
    #e94057,
    #8a2387
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 50px;

  position: absolute;
  z-index: -1;
  opacity: 0.6;
  top: 20%;
`;
