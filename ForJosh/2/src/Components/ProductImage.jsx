import styled from "styled-components";

const ProductImage = (props) =>{
  return(
    <ImageContainer>
        <img src={props.image} alt="" />
    </ImageContainer>
  );
};

export default ProductImage;

const ImageContainer = styled.div`

img{
    width: 500px;
}

`