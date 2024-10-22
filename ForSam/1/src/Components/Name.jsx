import styled from "styled-components";
import Text from "./Text"

const Name = () =>{
    return(
        <NameContainer>
            Name: <Text text = "Max Andrews"/>
        </NameContainer>
    );
};

export default Name;

const NameContainer = styled.div`
    width: fit-content;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-weight: 800;
    display: flex;
    gap: 10px;
    color: green;
`