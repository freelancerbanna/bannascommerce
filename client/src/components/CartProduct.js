import { Add, Remove } from "@material-ui/icons";

import styled from "styled-components";

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div``;
const ProductSize = styled.span``;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 28px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PriceContainer = styled.div`
  margin-top: 20px;
`;
const Price = styled.span`
  font-size: 34px;
`;

const CartProduct = () => {
  return (
    <Product>
      <ProductDetail>
        <Image src="https://4.imimg.com/data4/US/FQ/ANDROID-61296457/product-500x500.jpeg" />
        <Details>
          <ProductName>
            <b>Product:</b> BEANS SHOES
          </ProductName>
          <ProductId>
            <b>Id:</b> 123456
          </ProductId>
          <ProductColor />
          <ProductSize>
            <b>Size:</b> 40
          </ProductSize>
        </Details>
      </ProductDetail>
      <PriceDetail>
        <ProductAmountContainer>
          <Add style={{ cursor: "pointer" }} />
          <ProductAmount>2</ProductAmount>
          <Remove style={{ cursor: "pointer" }} />
        </ProductAmountContainer>
        <PriceContainer>
          <Price>$ 30</Price>
        </PriceContainer>
      </PriceDetail>
    </Product>
  );
};

export default CartProduct;
