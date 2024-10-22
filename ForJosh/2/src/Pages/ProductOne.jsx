import styled from "styled-components";

import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductOne = () =>{
  return(
    <DisplayContainerOne>
        <ProductImage/>
        <ProductName/>
        <ProductPrice/>
        <ProductDescription/>
    </DisplayContainerOne>
  );
};

export default ProductOne;

const DisplayContainerOne = styled.div`
    border: 1px black solid;
`