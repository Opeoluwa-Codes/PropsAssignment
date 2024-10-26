import styled from "styled-components";

const Text = (props) =>{
    return(
        <TextContainer>
            {props.text}
        </TextContainer>
    );
};

export default Text;

const TextContainer = styled.div`
    font-size: 16px;
    color: red;
    font-weight: 500;
`