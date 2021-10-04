import React from "react";
import styled from "styled-components";
import { CartProduct } from "../components";
import { tablet } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bolder;
  margin-bottom: 20px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${tablet({
    flexDirection: "column",
  })}
`;
const TopButton = styled.button`
  border-radius: 5px;
  padding: 15px;
  outline: none;
  font-size: 18px;
  cursor: pointer;
  border: ${(props) => (props.type === "filled" ? "teal" : "black")};
  color: white;
  background-color: ${(props) => (props.type === "filled" ? "teal" : "tomato")};
  ${tablet({
    marginBottom: "20px",
  })}
`;
const TopTexts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${tablet({
    marginBottom: "20px",
  })}
`;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  font-weight: 300;
  font-size: 18px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  ${tablet({
    flexDirection: "column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  height: 50vh;
  padding: 20px;
`;

const SummaryItem = styled.div`
  display: flex;
  margin: 20px 0;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "22px"};
`;
const SummaryText = styled.span``;
const SummaryPrice = styled.span``;

const Button = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 5px;
  padding: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
`;
const Cart = () => {
  return (
    <Container>
      <Wrapper>
        <Title>My Bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>My Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT</TopButton>
        </Top>
        <Bottom>
          <Info>
            <CartProduct />
            <Hr />
            <CartProduct />
          </Info>
          <Summary>
            <Title>Order Summary</Title>
            <SummaryItem>
              <SummaryText>Subtotal</SummaryText>
              <SummaryPrice>$ 50</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$ 3.5</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>$ 3.5</SummaryPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>$ 50</SummaryPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
