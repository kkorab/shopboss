import React from 'react';
import styled, { css } from 'styled-components';
import wave from 'assets/svg/wave.svg';
import secondWave from 'assets/svg/secondWave.svg';
import { Button } from 'components/atoms';
import { Link } from 'react-router-dom';

const StyledHome = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  height: 300px;
  width: 90%;
  margin: 0 auto;
  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
    `};
`;
const StyledWavesContainer = styled.div`
  width: 100vw;
  height: 500px;
  overflow: hidden;
  position: absolute;
  top: 0;
`;

const StyledWave = styled.img`
  height: 300px;
  position: absolute;
  z-index: -1;
`;

const StyledSecondWave = styled.img`
  position: absolute;
  height: 350px;
  z-index: -2;
`;

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  letter-spacing: 6px;
`;

const StyledP = styled.p`
  width: 245px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-transform: uppercase;
  line-height: 1.2;
  text-align: center;
  letter-spacing: 3px;
`;

const StyledTextWrapper = styled.div`
  line-height: 1;
`;

const Home = () => (
  <StyledHome>
    <StyledWrapper flex>
      <StyledTextWrapper>
        <StyledH1>SALE!</StyledH1>
        <StyledP>
          Find special offers for <strong>you</strong>
        </StyledP>
      </StyledTextWrapper>
      <Button to="/shop" as={Link}>
        Go to shop
      </Button>
    </StyledWrapper>
    <StyledWavesContainer>
      <StyledWave src={wave} />
      <StyledSecondWave src={secondWave} />
    </StyledWavesContainer>
  </StyledHome>
);

export default Home;
