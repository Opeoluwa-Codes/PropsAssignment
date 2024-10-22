import styled from "styled-components";
import Text from "./Text"

const Location = (props) =>{
    return(
        <LocationContainer>
            Location: <Text text = "Newfoundland"/>
        </LocationContainer>
    );
};

export default Location;

const LocationContainer = styled.div`
    width: fit-content;
    font-size: 16px;
    margin-left: 20px;
    font-weight: 800;
    display: flex;
    gap: 10px;
    color: green;
`