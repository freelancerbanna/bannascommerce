import React from "react";
import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import { Announcement, NewsLetter } from "../components";
import { tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  flex: 1;
  min-width: 450px;
  ${tablet({
    minWidth: "auto",
    width: "100%",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 10px 50px;
  min-width: 450px;
`;
const Title = styled.h1`
  font-weight: 300;
`;
const Description = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;
const Price = styled.span`
  font-weight: 600;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 40px 0px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 25px;
  font-weight: 300;
  margin-right: 30px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.bgcolor};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-right: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  ${tablet({
    width: "90%",
    marginTop: "50px",
  })}
`;
const Amount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;
const AmountItem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid teal;
  margin: 0px 10px;
`;
const Button = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 5px;
  padding: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
const SingleProduct = () => {
  return (
    <Container>
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://d1flfk77wl2xk4.cloudfront.net/Assets/78/867/L_p0091386778.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Junket</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse totam
            accusamus beatae, repudiandae alias voluptatibus similique itaque
            ratione quisquam! Sit ex aliquid voluptates corrupti harum officiis
            non, aperiam velit soluta itaque atque similique? Quia ipsam natus,
            at, iste enim cumque hic quo unde accusamus perferendis, molestiae
            reprehenderit similique esse a?
          </Description>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor bgcolor="black" />
              <FilterColor bgcolor="blue" />
              <FilterColor bgcolor="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <Amount>
              <Remove style={{ fontSize: "30px", cursor: "pointer" }} />
              <AmountItem>1</AmountItem>
              <Add style={{ fontSize: "30px", cursor: "pointer" }} />
            </Amount>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
    </Container>
  );
};

export default SingleProduct;
