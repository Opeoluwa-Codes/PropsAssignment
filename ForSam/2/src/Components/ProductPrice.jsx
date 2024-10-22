import styled from "styled-components";

const ProductPrice = (props) =>{
  return(
    <PriceContainer>
        {props.price}
    </PriceContainer>
  );
};

export default ProductPrice;

const PriceContainer = styled.div`
    font-size: 16px;
    font-weight: 400;
    color: red;
`