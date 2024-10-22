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
    font-size: 20px;
    font-weight: 800;
`