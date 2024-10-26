import styled from "styled-components";
import iPhone from "../assets/JPEG/iPhone.jpg"
import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductTwo = () =>{
  return(
    <DisplayContainerTwo>
        <ProductImage image = {iPhone}/>
        <ProductName name = "iPhone 15"/>
        <ProductPrice price = "$399.99"/>
        <ProductDescription description = "Get your Apple smartphone now!"/>
    </DisplayContainerTwo>
  );
};

export default ProductTwo;

const DisplayContainerTwo = styled.div`
    border: 1px yellow solid;
    width: fit-content;
    margin-bottom: 30px;
`