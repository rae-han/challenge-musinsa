import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/images/logo_musinsa.svg'

const HeaderContainer = styled.header`
  position: sticky;
  z-index: 10000;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  background-color: #fff;
  
  .logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

function Header () {
  return (
    <HeaderContainer>
      <img className="logo" src={logo} alt="logo" />
    </HeaderContainer>
  )
}

export default Header;