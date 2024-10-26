import styled from "styled-components";
import iPad from "../assets/JPEG/iPad.jpg"
import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductThree = () =>{
  return(
    <DisplayContainerThree>
        <ProductImage image = {iPad}/>
        <ProductName name = "iPad Air"/>
        <ProductPrice price = "$499.99"/>
        <ProductDescription description = "Buy the latest iPad here!"/>
    </DisplayContainerThree>
  );
};

export default ProductThree;

const DisplayContainerThree = styled.div`
    border: 1px yellow solid;
    width: fit-content;
`