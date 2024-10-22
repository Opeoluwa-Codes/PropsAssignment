import styled from "styled-components";

import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductThree = () =>{
  return(
    <DisplayContainerThree>
        <ProductImage/>
        <ProductName/>
        <ProductPrice/>
        <ProductDescription/>
    </DisplayContainerThree>
  );
};

export default ProductThree;

const DisplayContainerThree = styled.div`
    border: 1px black solid;
`