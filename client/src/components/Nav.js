import React from "react";
import styled from "styled-components";
import { Search, AddShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

import { mobile, tablet } from "../responsive";
import { Link } from "react-router-dom";

//calling styled components and styling elements
const Container = styled.div`
  padding: 10px 20px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  position: sticky;
  z-index: 999;
  background: white;
  top: 0;
  overflow: hidden;
  transition: top 5s linear;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem !important;
  ${tablet({
    flexDirection: "column",
  })}
`;

//navbar left elements
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile({
    display: "none",
  })}
  ${tablet({
    flexDirection: "column",
    marginBottom: "20px",
  })}
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  margin-left: 10px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  height: 100%;
  outline: none;
`;

//navbar center elements
const Center = styled.div`
  flex: 1;
  ${tablet({
    flexDirection: "column",
    marginBottom: "20px",
  })}
`;
const Logo = styled.h1`
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  color: teal;
  text-shadow: 0px 2px 0px #ebebeb, 1px 2px 3px #878787, 4px -3px 2px #e3e3e3;
  ${mobile({
    fontSize: "18px",
  })}
`;
//navbar rigght elements
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const MenuItem = styled.div`
  font-size: 15px;
  cursor: pointer;
  ${tablet({
    margin: "0px 20px",
  })}
`;

const Nav = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchbarContainer>
            <Input />
            <Search style={{ color: "gray", fontSize: "22px" }} />
          </SearchbarContainer>
        </Left>
        <Center>
          <Link to="/">
            <Logo>
              BANNA<span style={{ color: "tomato" }}>SCOM</span>MERCE
            </Logo>
          </Link>
        </Center>
        <Right>
          <MenuItem>
            <Link to="/login">SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/register">REGISTER</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={4} color="primary">
                <AddShoppingCart />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Nav;
