import { AdvertSign, Bubble } from 'components/atoms';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAdv = styled.div`
  margin-bottom: 2rem;
  position: relative;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: -1;
`;

const StyledAdvWrapper = styled.div`
  position: relative;
  padding: 6rem 2rem 4rem 2rem;
  border-radius: 15px;
  overflow: hidden;
`;

const StyledHeadline = styled.h1`
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
  margin-top: 20px;
  letter-spacing: 2px;
  position: relative;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const StyledParagraphWrapper = styled.div`
  padding: 2rem 0;
`;

const StyledParagraph = styled.p`
  padding-bottom: ${({ discount }) => (discount ? '1rem' : 'initial')};
  color: rgba(167, 154, 230, 1);
  font-family: ${({ theme }) => theme.fontFamilies.yusei};
  font-size: ${({ theme }) => theme.fontSizes.m};
  line-height: 120%;
  letter-spacing: 1px;
  position: relative;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1;

  &:first-child {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const StyledWave = styled.img`
  width: 200%;
  opacity: ${({ secondary }) => (secondary ? 0.3 : 0.4)};
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transform: ${({ secondary }) =>
    secondary ? 'translateX(-100px)' : 'translateX(0)'};
`;

const Advert = ({ params }) => {
  const {
    headline,
    primaryParagraph,
    secondaryParagraph,
    tertiaryParagraph,
    bubbleColors,
    contentColors,
    waves,
  } = params;
  const { firstWave } = waves;
  const { primaryBubColor, secondaryBubColor } = bubbleColors;
  const { primaryColor, secondaryColor } = contentColors;
  return (
    <StyledAdv>
      <StyledAdvWrapper>
        <StyledWave src={firstWave} />
        <StyledWave secondary src={firstWave} />
        <AdvertSign colors={{ primaryColor, secondaryColor }} />
        <StyledHeadline>{headline}</StyledHeadline>
        <StyledParagraphWrapper>
          <StyledParagraph>{primaryParagraph}</StyledParagraph>
          <StyledParagraph>{secondaryParagraph}</StyledParagraph>
          <StyledParagraph>{tertiaryParagraph}</StyledParagraph>
        </StyledParagraphWrapper>
      </StyledAdvWrapper>
      <Bubble
        params={{
          x: '-20px',
          y: '10%',
          size: '40px',
          primaryBubColor,
          secondaryBubColor,
        }}
      />
      <Bubble
        params={{
          x: 'calc(100% - 30px)',
          y: '40%',
          size: '60px',
          primaryBubColor,
          secondaryBubColor,
        }}
      />
      <Bubble
        params={{
          x: '-35px',
          y: '75%',
          size: '70px',
          primaryBubColor,
          secondaryBubColor,
        }}
      />
      <Bubble
        params={{
          x: 'calc(100% - 7.5px)',
          y: '95%',
          size: '15px',
          primaryBubColor,
          secondaryBubColor,
        }}
      />
    </StyledAdv>
  );
};

Advert.propTypes = {
  params: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    primaryParagraph: PropTypes.string.isRequired,
    secondaryParagraph: PropTypes.string.isRequired,
    tertiaryParagraph: PropTypes.string.isRequired,
    bubbleColors: PropTypes.shape({
      primaryBubColor: PropTypes.string.isRequired,
      secondaryBubColor: PropTypes.string.isRequired,
    }).isRequired,
    contentColors: PropTypes.shape({
      primaryColor: PropTypes.string.isRequired,
      secondaryColor: PropTypes.string.isRequired,
    }).isRequired,
    waves: PropTypes.shape({
      firstWave: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Advert;
