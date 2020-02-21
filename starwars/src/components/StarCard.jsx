import React from "react";
import styled from "styled-components";

const StarCard = props => {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Born: {props.birth}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
        </div>
    );
};
export default StarCard;