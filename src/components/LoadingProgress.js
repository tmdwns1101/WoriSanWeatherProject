import React, { Fragment } from "react";
import styled, { keyframes } from "styled-components";

const LoadingContainer = styled.div`
  width: 150px;
  height: 150px;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  
  border-radius: 50%;
  border: 3px solid #343a40;
  font-size: 2rem;
  font-family: 'Modak', cursive;
  letter-spacing: 3px;
  text-shadow: 0px 0px 5px rgb(33, 189, 153);
  box-shadow: 0px 0px 10px #495057;
  color: rgb(33, 189, 153);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotateAni = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

//animation: ${rotateAni} 1.5s linear infinite;
const HalfRing = styled.div`
  position: relative;
  left: 0;
  top: -104%;
  transform-origin: center;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid rgb(33, 189, 153);
  border-right: 3px solid rgb(33, 189, 153);
  border-radius: 50%;
  animation: ${rotateAni} 1.5s linear infinite;
`;

function LoadingProgress() {
  return (
    <Fragment>
      <LoadingContainer>
        <Circle>Loading</Circle>
        <HalfRing />
      </LoadingContainer>
    </Fragment>
  );
}

export default LoadingProgress;