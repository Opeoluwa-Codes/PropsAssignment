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
    font-size: 30px;
    font-weight: 800;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
`