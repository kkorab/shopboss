import React from 'react';
import styled from 'styled-components';
import { PageWrapper } from 'components/atoms';

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

const StyledGoogleMap = styled.iframe`
  margin-top: 2rem;
  width: 100%;
  height: 450px;
  border: 4px solid ${({ theme }) => theme.fontColors.tertiaryColor};
`;

const Contact = () => (
  <PageWrapper center>
    <StyledGoogleMap
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.5991290458105!2d-74.00975078434473!3d40.70482554599097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a160e9cdf99%3A0xb5060ffe1db10e52!2s95%20Wall%20St%2C%20New%20York%2C%20NY%2010005%2C%20Stany%20Zjednoczone!5e0!3m2!1spl!2spl!4v1611743927474!5m2!1spl!2spl"
      frameBorder=""
      allowFullScreen=""
      aria-hidden="false"
      title="google-map"
    />
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
  </PageWrapper>
);

export default Contact;
