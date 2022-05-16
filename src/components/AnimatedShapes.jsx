import React from 'react'
import styled, { css } from 'styled-components';

const BasicCircle = css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    position: absolute;
    z-index: -1;
`;

const CircleP = styled.div`
    ${BasicCircle}
    top: 400px;
    left: -100px;
    background-color: pink;
    animation: circlep 20s linear alternate infinite;

    @keyframes circlep {
        to{
            transform: translate(100vw, -100vh)
        }
    }
`;

const CircleB = styled.div`
    ${BasicCircle}
    top: -100px;
    left: -100px;
    background-color: #4451d8;
    opacity: 0.7;
    animation: circleb 20s linear alternate infinite;

    @keyframes circleb {
        to{
            transform: translate(90vw, 100vh)
        }
    }
`;

const AnimatedShapes = () => {
  return (
      <>
        <CircleP />
        <CircleB />
      </>
  )
}

export default AnimatedShapes