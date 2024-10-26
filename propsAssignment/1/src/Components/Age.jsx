import styled from "styled-components";
import Text from "./Text"

const Age = (props) =>{
    return(
        <AgeContainer>
            Age: <Text text = "24"/>
        </AgeContainer>
    );
};

export default Age;

const AgeContainer = styled.div`
    width: fit-content;
    font-size: 16px;
    margin-bottom: 20px;
    margin-left: 20px;
    font-weight: 800;
    display: flex;
    gap: 10px;
    color: green;
`