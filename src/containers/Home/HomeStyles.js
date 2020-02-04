import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  max-width: 1600px;
`;

export const RightTriangle = styled.div`
  width: 50%;
  height: 200px;
  overflow: hidden;
  -webkit-transform: skewY(20deg);
  transform: skewY(10deg);
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

  top: 400px;
  opacity: 1;
  position: absolute;
  z-index: -1;
  right: 0;
  border-radius: 30px;
  left: 0;
`;

export const TopLeftTriangle = styled.div`
  width: 50%;
  height: 50%;
  overflow: hidden;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;

  position: absolute;
  z-index: -1;
  border-radius: 50px;
`;

export const TopRightTriangle = styled.div`
  width: 100%;
  height: 50%;
  opacity: 1;
  top: 100px;
  overflow: hidden;
  -webkit-transform: skewY(21deg);
  transform: skewY(10deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: #ff4e50; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f9d423,
    #ff4e50
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f9d423,
    #ff4e50
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  border-radius: 50px;

  position: absolute;
  z-index: -1;
  opacity: 1;
  top: 5%;
`;
