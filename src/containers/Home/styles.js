import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  max-width: 1600px;
`;

export const TopLeftTriangle = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-transform: skewY(-12deg);
  transform: skewY(-12deg);
  -webkit-transform-origin: 0;
  transform-origin: 0;
  background: #ee0979; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ff6a00,
    #fff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ff6a00,
    #fff
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
  background: #b24592; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f15f79,
    #fff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f15f79,
    #fff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 50px;

  position: absolute;
  z-index: -1;
  opacity: 0.6;
  top: 20%;
`;
