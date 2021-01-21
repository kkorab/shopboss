import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  height: ${({ center }) => (center ? '100vh' : 'initial')};
  width: 90%;
  padding: 100px 0px 90px 0px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default StyledPageWrapper;
