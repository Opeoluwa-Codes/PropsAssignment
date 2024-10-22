import styled from "styled-components";

const ProductName = (props) =>{
  return(
    <NameContainer>
        {props.name}
    </NameContainer>
  );
};

export default ProductName;

const NameContainer = styled.div`
    font-size: 20px;
    font-weight: 800;
`