import styled from "styled-components";

const Picture = (props) =>{
    return(
        <PictureContainer>
            <img src={props.image} alt="" />
        </PictureContainer>
    );
};

export default Picture;

const PictureContainer = styled.div`
    width: fit-content;
    margin-bottom: 20px;
    img{
        width: 500px;
    }
`