import React from 'react';
import SecondFlowerSVG from '../images/flower2.svg';

const SecondFlower = () => {
  return (
    <div
      style={{
        width: '40%',
        position: 'absolute',
        top: 400,
        left: 150,
        zIndex: -1,
        background: 'rgba(255, 255, 255, 1)',
        opacity: 0.7
      }}
    >
      <img src={SecondFlowerSVG}></img>
    </div>
  );
};

export default SecondFlower;
