import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  ${mobile({
    height: "100vh!important",
  })}
`;
const SliedsButton = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  color: white;
  opacity: 0.1;
  z-index: 9;
  &:hover {
    opacity: 1;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: 1.3s all ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slides = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  ${mobile({
    flexDirection: "column!important",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
  width: 100vw;
  height: 100%;
  ${mobile({
    height: "60%",
    overflow: "hidden",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  ${mobile({
    objectFit: "cover",
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
  ${mobile({
    fontSize: "30px",
  })}
`;
const Description = styled.p`
  font-size: 26px;
  letter-spacing: 3px;
  margin: 50px 0px;
  ${mobile({
    fontSize: "18px",
  })}
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

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slideHandle = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (slideIndex < 2) {
        setSlideIndex(slideIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }, 4500);
    return () => clearTimeout(timeoutId);
  }, [slideIndex]);

  return (
    <Container>
      <SliedsButton onClick={() => slideHandle("left")} direction="left">
        <ArrowLeft />
      </SliedsButton>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slides key={item.id}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Button>Shop Now</Button>
            </InfoContainer>
          </Slides>
        ))}
      </Wrapper>
      <SliedsButton onClick={() => slideHandle("right")} direction="right">
        <ArrowRight />
      </SliedsButton>
    </Container>
  );
};

export default Slider;
