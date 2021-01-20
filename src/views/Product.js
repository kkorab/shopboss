import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { SelectSize } from 'components/atoms';

const StyledProductWrapper = styled.div`
  padding-top: 100px;
  width: 90%;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.fontFamilies.yusei};
`;

const StyledImageContainer = styled.div`
  margin: 0rem 0 2rem 0;
  padding: 3rem 0;
  width: 100%;
  background: #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 70%;
`;

const StyledProductTitle = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledPrice = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.fontColors.tertiaryColor};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;

const StyledDesc = styled.p`
  text-align: center;
`;

const StyledCategory = styled.p`
  margin: 2rem 0 0.5rem 0.5rem;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`;

const StyledStarsContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const starStyles = {
  fontSize: '3rem',
  color: 'gold',
};

const Product = ({ currentProduct }) => {
  const [productData] = useState(currentProduct);
  const { title, price, description, category, image } = productData;
  const fixedCategory = category.replace(' ', ' / ');
  return (
    <StyledProductWrapper>
      <StyledCategory>category: {fixedCategory}</StyledCategory>
      <StyledImageContainer>
        <StyledImg src={image} />
      </StyledImageContainer>
      <StyledProductTitle>{title}</StyledProductTitle>
      <StyledPrice>$ {price}</StyledPrice>
      <StyledStarsContainer>
        <StarIcon style={starStyles} />
        <StarIcon style={starStyles} />
        <StarIcon style={starStyles} />
        <StarIcon style={starStyles} />
        <StarBorderIcon style={starStyles} />
      </StyledStarsContainer>
      <StyledDesc>{description}</StyledDesc>
      <SelectSize />
    </StyledProductWrapper>
  );
};

Product.propTypes = {
  currentProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({ currentProduct: state.currentProduct });

export default connect(mapStateToProps)(Product);
