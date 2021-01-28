import React, { useState } from 'react';
import styled from 'styled-components';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  margin: 1rem 0;
  padding-bottom: 3rem;
  width: 100%;
  border-radius: 15px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const StyledIconsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledCircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border-radius: 50%;
  border: 1px solid #bbb;
  outline: none;
`;

const materialIconStyles = {
  fontSize: 24,
};

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledProductImage = styled.img`
  width: 50%;
`;

const StyledProductName = styled.h2`
  padding: 2rem 1rem 1rem;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
  text-transform: capitalize;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledProductPrice = styled(StyledProductName)`
  padding: 0;
`;

const StyledButton = styled.button`
  padding: 1rem 3rem;
  margin-top: 2rem;
  font-family: ${({ theme }) => theme.fontFamilies.raleway};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  color: #fff;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.fontColors.tertiaryColor};
  outline: none;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;

const ProductCard = ({ productData }) => {
  const { id, title, price, image } = productData;
  const [isWished, setIsWished] = useState(false);
  return (
    <StyledWrapper>
      <StyledIconsWrapper>
        <StyledCircleButton>
          <FullscreenIcon style={materialIconStyles} />
        </StyledCircleButton>
        <StyledCircleButton onClick={() => setIsWished(!isWished)}>
          {isWished ? (
            <FavoriteIcon color="secondary" style={materialIconStyles} />
          ) : (
            <FavoriteIcon style={materialIconStyles} />
          )}
        </StyledCircleButton>
      </StyledIconsWrapper>
      <StyledContentWrapper>
        <StyledProductImage src={image} alt={title} />
        <StyledProductName>{title}</StyledProductName>
        <StyledProductPrice>$ {price.toFixed(2)}</StyledProductPrice>
        <StyledButton>
          <StyledLink to={`/products/${id}`}>See product &#187;</StyledLink>
        </StyledButton>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

ProductCard.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
