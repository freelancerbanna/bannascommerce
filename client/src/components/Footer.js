import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  color: teal;
  text-shadow: 0px 2px 0px #ebebeb, 1px 2px 3px #878787, 4px -3px 2px #e3e3e3;
`;
const Description = styled.p`
  font-size: 18px;
  margin-top: 20px;
`;
const SocialContainer = styled.div`
  display: flex;

  margin-top: 20px;
`;
const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  background-color: ${(props) => props.bgcolor};
`;
const Center = styled.div`
  flex: 1;
  padding: 20px; ;
`;
const Title = styled.h3`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center",
  })}
`;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  ${mobile({
    flexWrap: "nowrap",
    flexDirection: "column",
  })}
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  font-size: 18px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactList = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Link to="/">
          <Logo>
            BANNA<span style={{ color: "tomato" }}>SCOM</span>MERCE
          </Logo>
        </Link>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
          deserunt omnis! Quibusdam voluptatibus eaque ad hic cumque cum eius
          ipsum.
        </Description>
        <SocialContainer>
          <SocialIcon bgcolor="teal">
            <Facebook />
          </SocialIcon>
          <SocialIcon bgcolor="pink">
            <Instagram />
          </SocialIcon>
          <SocialIcon bgcolor="lightblue">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/cart">Cart</Link>
          </ListItem>
          <ListItem>Man fashion</ListItem>
          <ListItem>Woman fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <ContactList>
            <Room style={{ marginRight: "10px" }} /> Dhaka 1204, Bangladesh
          </ContactList>
          <ContactList>
            <Phone style={{ marginRight: "10px" }} /> +1234567890
          </ContactList>
          <ContactList>
            <Email style={{ marginRight: "10px" }} /> bannascommerce@mail.com
          </ContactList>
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
