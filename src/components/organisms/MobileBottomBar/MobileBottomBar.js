import React from 'react';
import styled from 'styled-components';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { useLocation } from 'react-router-dom';

const StyledBar = styled.div`
  height: 80px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.bgColors.secondaryColor};
  z-index: 1;
`;

const StyledWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledBtn = styled.button`
  background: none;
  border: none;
  outline: none;
`;

const StyledTotalPrice = styled.h2`
  font-family: ${({ theme }) => theme.fontFamilies.yusei};
`;

const StyledMaterialIcons = {
  fontSize: 30,
};

const MobileBottomBar = () => {
  let { pathname } = useLocation();
  return (
    pathname !== '/' && (
      <StyledBar>
        <StyledWrapper>
          <StyledBtn>
            <FavoriteIcon style={StyledMaterialIcons} />
          </StyledBtn>
          <StyledTotalPrice>$ 0.00</StyledTotalPrice>
          <StyledBtn>
            <LocalMallIcon style={StyledMaterialIcons} />
          </StyledBtn>
        </StyledWrapper>
      </StyledBar>
    )
  );
};

export default MobileBottomBar;
