import Picture from "../Components/picture"
import Name from "../Components/name"
import Age from "../Components/age"
import Location from "../Components/location"


import PP from "../assets/JPEG/PP.jpg"


import styled from "styled-components";

const DisplayCard = (props) =>{
    return(
        <DisplayContainer>
            <div className={`display ${props.display}`}>
                <Picture image = {PP}/>
                <Name/>
                <Age/>
                <Location/>
            </div>
        </DisplayContainer>
    );
};

export default DisplayCard;

const DisplayContainer = styled.div`
    border: 1px black solid;
    width: fit-content;

    .displayOne{
        background-color: white;
    }
    .displayTwo{
        background-color: black;
    }
`