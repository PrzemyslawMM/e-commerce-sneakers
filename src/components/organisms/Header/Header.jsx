import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LogoContainer = styled.div`
  position: relative;
  width: 138px;
  height: 20px;
  color: ${(props) => props.theme.colors.black};
  margin: auto 30px auto 30px;
`;

const Wrapper = styled.nav`
  margin: 30px 0 0 30px;
  padding-bottom: 30px;
  display: flex;
  width: 90vw;
  border-bottom: 3px solid ${({ theme }) => theme.colors.lightGrayishBlue};
  align-items: center;
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  color: ${({ theme }) => theme.colors.darkGrayishBlue};
  font-size: 1rem;
`;

const CartContainer = styled.div`
  position: relative;
  width: 22px;
  height: 20px;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 30px;
  margin-left: 15px;
  height: 30px;
  margin-right: 15px;
`;

const FunctionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const HamburgerWrapper = styled.div`
  position: relative;
  width: 16px;
  height: 15px;
`;

const Header = () => {
  return (
    <Wrapper>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <HamburgerWrapper>
          <Image fill src="icon-menu.svg" />
        </HamburgerWrapper>
        <LogoContainer>
          <Image src="logo.svg" fill alt="Logo" />
        </LogoContainer>
      </div>
      <FunctionWrapper>
        <CartContainer>
          <Image src="icon-cart.svg" fill alt="Cart" />
        </CartContainer>
        <ProfileContainer>
          <Image src="/image-avatar.png" fill alt="Profile" />
        </ProfileContainer>
      </FunctionWrapper>
      <MenuWrapper style={{ display: 'none' }}>
        <p>Collections</p>
        <p>Men</p>
        <p>Women</p>
        <p>About</p>
        <p>Contact</p>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;
