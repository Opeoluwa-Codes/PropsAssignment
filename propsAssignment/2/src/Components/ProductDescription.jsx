import styled from "styled-components";

const ProductDescription = (props) =>{
  return(
    <DescriptionContainer>
        {props.description}
    </DescriptionContainer>
  );
};

export default ProductDescription;

const DescriptionContainer = styled.div`
    font-size: 16px;
    font-weight: 400;
    margin-left: 20px;
    margin-bottom: 10px;
`