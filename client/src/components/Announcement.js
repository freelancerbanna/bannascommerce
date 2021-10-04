import React from "react";
import styled from "styled-components";

//calling styled components and styling elements
const Container = styled.div`
  height: 30px;
  background-color: teal;
  display: flex;
  justify-content: center;
  color: white;
  align-items: center;
  font-size: 14px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
`;
const Announcement = () => {
  return <Container>Super offer! Get Free Delivery over $100</Container>;
};

export default Announcement;
