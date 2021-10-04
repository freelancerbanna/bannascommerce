import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  object-fit: cover;
  margin: 30px;
  height: 70vh;
  min-width: 350px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 7px 6px rgb(193 193 193 / 93%) !important;
  ${mobile({
    minWidth: "100%",
  })}
`;
const Image = styled.img`
  width: 100%;
  opacity: 0.8;
  height: 100%;
`;
const Info = styled.div`
  position: absolute;
  background-color: #c1c1c117;
  top: 0;
  left: 0;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  z-index: 9;
  width: 100%;
  height: 100%;
`;
const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
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
const CategoryItem = ({ item: { img, title } }) => {
  return (
    <Container>
      <Image src={img} />
      <Info>
        <Title>{title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
