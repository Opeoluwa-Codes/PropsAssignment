import styled from "styled-components";

import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductTwo = () =>{
  return(
    <DisplayContainerTwo>
        <ProductImage/>
        <ProductName/>
        <ProductPrice/>
        <ProductDescription/>
    </DisplayContainerTwo>
  );
};

export default ProductTwo;

const DisplayContainerTwo = styled.div`
    border: 1px black solid;
`