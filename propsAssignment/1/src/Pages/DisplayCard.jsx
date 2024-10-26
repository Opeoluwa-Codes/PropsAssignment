import Picture from "../Components/Picture"
import Name from "../Components/Name"
import Age from "../Components/Age"
import Location from "../Components/Location"


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