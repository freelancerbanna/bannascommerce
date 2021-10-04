import styled from "styled-components";
import { Search, AddShoppingCart, FavoriteBorder } from "@material-ui/icons";

const Icon = styled.div`
  margin: 5px;
  font-size: 18px;
  background-color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 1s ease;
  font-size: 20px;
  &:hover {
    background-color: #0000006b;
    color: white;
    cursor: pointer;
    font-weight: bolder;
  }
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  display: flex;
  align-items: center;
  margin: auto;
  z-index: 9;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  background-color: #ededed;
  min-width: 280px;
  height: 350px;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
  }
  &:hover ${Icon} {
    opacity: 0.9;
  }
  &:hover ${Info} {
    background-color: #00000040;
  }
`;
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  object-fit: cover;
`;
const Image = styled.img`
  height: 70%;
  width: 100%;
  position: relative;
  z-index: 2;
`;

const ProductItem = ({ item: { img } }) => {
  return (
    <Container>
      <Circle />
      <Image src={img} />
      <Info>
        <Icon>
          <AddShoppingCart />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorder />
        </Icon>
      </Info>
    </Container>
  );
};
export default ProductItem;
