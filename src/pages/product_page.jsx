import CompanyName from '@/atoms/CompanyName/CompanyName';
import Header from '@/organisms/Header/Header';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
`;

const MainImage = styled(Image)`
  /* border-radius: 16px; */
`;

const Wrapper = styled.article`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 10px;
`;

const Description = styled.p`
  max-width: 300px;
  color: ${({ theme }) => theme.colors.grayishBlue};
  margin-top: 10px;
`;

const DescriptionWrapper = styled.div`
  justify-content: center;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  margin-left: 16px;
`;

const H1 = styled.h1`
  font-size: 2rem;
`;

const Value = styled.p`
  font-size: 1.5rem;
  font-weight: 800;
`;

const ValueWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  margin-right: 16px;
`;

const ValueDiscount = styled.div`
  margin-left: 16px;
  width: 3.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.orange};
  background-color: ${({ theme }) => theme.colors.paleOrange};
  font-weight: 800;
  border-radius: 8px;
`;

const OldValue = styled.div`
  color: ${({ theme }) => theme.colors.grayishBlue};
  text-decoration: line-through;
`;

const ItemCount = styled.div``;

const ProductPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ImageWrapper>
          <MainImage src="/image-product-1.jpg" fill />
        </ImageWrapper>
        <DescriptionWrapper>
          <CompanyName name="SNEAKER COMPANY" />
          <div>
            <H1>Fall Limited Edition Sneakers</H1>
            <Description>
              These low-profile sneakers are perfect casual wear companion.
              Featuring a durable rubber outer sole, they&apos;ll withstand
              everything the weather can offer.
            </Description>
          </div>
          <ValueWrapper>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Value>$125.00</Value>
              <ValueDiscount>-50%</ValueDiscount>
            </div>
            <OldValue>$250.00</OldValue>
          </ValueWrapper>
          <ItemCount>0</ItemCount>
        </DescriptionWrapper>
      </Wrapper>
    </>
  );
};

export default ProductPage;
