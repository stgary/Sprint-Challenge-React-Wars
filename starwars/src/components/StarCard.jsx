import React from "react";
import styled from "styled-components";

const WrapperDiv = styled.div`
    background: #cececea8;
    color: black;
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    cursor: pointer;
    box-shadow: 0px 1px 6px -2px grey;
    border-radius: 5px;
`;

const ContainerDiv = styled.div`
    margin: 3%;

`;

const StarCard = props => {
    return (
        <ContainerDiv>
            <WrapperDiv>
                <h2>{props.name}</h2>
                <p>Born: {props.birth}</p>
                <p>Height: {props.height}</p>
                <p>Mass: {props.mass}</p>
            </WrapperDiv>
        </ContainerDiv>
    );
};
export default StarCard;