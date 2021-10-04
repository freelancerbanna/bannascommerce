import React from "react";
import styled from "styled-components";
import { Announcement, NewsLetter, Product } from "../components";

const Container = styled.div``;
const Title = styled.h1`
  font-size: 45px;
  margin-top: 15px;
  font-weight: 700;
  padding: 15px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 10px;
`;
const Select = styled.select`
  margin-right: 10px;
  padding: 15px;
`;
const Option = styled.option`
  padding: 15px;
`;

const Filter = styled.div``;
const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Title>Dress</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (dsc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Product />
      <NewsLetter />
    </Container>
  );
};

export default ProductList;
