import styled from "styled-components";
import Laptop from "../assets/JPEG/Laptop.jpg"
import ProductImage from "../Components/ProductImage";
import ProductName from "../Components/ProductName";
import ProductPrice from "../Components/ProductPrice";
import ProductDescription from "../Components/ProductDescription";

const ProductOne = () =>{
  return(
    <DisplayContainerOne>
        <ProductImage image = {Laptop}/>
        <ProductName name = "MacBook"/>
        <ProductPrice price = "$599.99"/>
        <ProductDescription description = "Buy your new laptop now!"/>
    </DisplayContainerOne>
  );
};

export default ProductOne;

const DisplayContainerOne = styled.div`
    border: 1px yellow solid;
    width: fit-content;
    margin-bottom: 30px;
`