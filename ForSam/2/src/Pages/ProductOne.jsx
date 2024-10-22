import styled from "styled-components";

import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductOne = () =>{
  return(
    <DisplayContainer>
        <ProductImage/>
        <ProductName/>
        <ProductPrice/>
        <ProductDescription/>
    </DisplayContainer>
  );
};

export default ProductOne;

const DisplayContainer = styled.div`
    border: 1px black solid;
`