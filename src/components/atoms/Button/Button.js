import styled from 'styled-components';

const Button = styled.button`
  padding: 0.5rem 2rem;
  background: ${({ theme }) => theme.bgColors.secondaryColor};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-transform: uppercase;
  text-decoration: none;
  color: ${({ theme }) => theme.fontColors.primaryColor};
  border: 6px solid ${({ theme }) => theme.bgColors.tertiaryColor};
  border-radius: 10px;
  outline: none;
`;

export default Button;
