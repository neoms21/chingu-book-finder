import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background: #d7ffb6;
  height: 14vh;
  line-height: 1;
  align-items: center;
  font-size: 8vh;
  justify-content: center;
  display: flex;
`;

const Header = () => {
  return <HeaderContainer>The Book finder</HeaderContainer>;
};

export default Header;
