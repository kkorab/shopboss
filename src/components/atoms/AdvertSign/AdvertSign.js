import React from 'react';
import styled from 'styled-components';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PropTypes from 'prop-types';

const StyledSign = styled.div`
  width: 70px;
  height: 70px;
  background: ${({ colors }) =>
    `linear-gradient(45deg, ${colors.primaryColor}, ${colors.secondaryColor})`};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const AdvertSign = ({ colors }) => {
  const { primaryColor, secondaryColor } = colors;
  return (
    <StyledSign colors={{ primaryColor, secondaryColor }}>
      <LoyaltyIcon style={{ fontSize: 50, color: '#fff' }} />
    </StyledSign>
  );
};

AdvertSign.propTypes = {
  colors: PropTypes.shape({
    primaryColor: PropTypes.string.isRequired,
    secondaryColor: PropTypes.string.isRequired,
  }).isRequired,
};
export default AdvertSign;
