import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCnt = styled.div`
  margin: 2rem 0;
`;

const StyledH1 = styled.h1`
  text-align: center;
  padding-bottom: 1rem;
  text-transform: capitalize;
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
`;

const StyledSocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & h3 {
    padding: 0.3rem;
  }
`;

const StyledSocial = styled.h3`
  padding: 0.3rem;

  &::after {
    content: '•';
    padding-left: 0.3rem;
  }
  &:last-child::after {
    content: '';
  }
`;

const StyledAddress = styled.address`
  margin-top: 1rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.m};
  text-align: center;
  line-height: 150%;

  & a {
    text-decoration: none;
    color: ${({ theme }) => theme.fontColors.tertiaryColor};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  }
`;

const Contact = () => (
  <StyledWrapper>
    <StyledCnt>
      <StyledH1>Contact information</StyledH1>
      <StyledAddress>95 Wall Street, New York, NY 10153</StyledAddress>
      <StyledP>
        Call us: <a href="tel:123-456-7890">123-456-7890</a>
      </StyledP>
      <StyledP>We are open from Monday - Friday 08:00 am - 05:00 pm</StyledP>
    </StyledCnt>

    <StyledCnt>
      <StyledH1>Follow us</StyledH1>
      <StyledSocialsWrapper>
        <StyledSocial>facebook</StyledSocial>
        <StyledSocial>instagram</StyledSocial>
        <StyledSocial>linkedin</StyledSocial>
      </StyledSocialsWrapper>
    </StyledCnt>
  </StyledWrapper>
);

export default Contact;
