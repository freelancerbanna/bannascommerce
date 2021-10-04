import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80vh;
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({ fontSize: "45px", marginBottom: "20px" })}
`;
const Description = styled.div`
  font-size: 28px;
  margin-bottom: 30px;
  ${mobile({
    marginBottom: "15px",
  })}
`;
const InfoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  overflow: hidden;
  height: 60px;
  border-radius: 5px;
  margin-top: 30px;
  ${mobile({
    height: "40px",
  })}
`;
const Input = styled.input`
  border: none;
  padding-left: 20px;
  outline: none;
  flex: 8;
  ${mobile({
    flex: "3",
    width: "30%",
  })}
`;
const Button = styled.button`
  color: white;
  background-color: teal;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  flex: 1;
  ${mobile({
    height: "100%",
  })}
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>Get updates to latest news</Description>
      <InfoContainer>
        <Input placeholder="Enter your email" type="email" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default NewsLetter;
