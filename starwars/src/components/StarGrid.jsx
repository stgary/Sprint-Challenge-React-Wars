import React, {useState, useEffect} from "react";
import axios from "axios";
import StarCard from "./StarCard";
import styled from "styled-components";

const StarWars = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default function NasaGrid() {
    const [char, setChar] = useState([]);
    console.log(char);

    useEffect(() => {
        axios
        .get("https://swapi.co/api/people")
        .then(response => {
            setChar(response.data.results);
            // console.log(response.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <StarWars>
            {char.map(character => {
                return <StarCard 
                name={character.name}
                height={character.height}
                mass={character.mass}
                birth={character.birth_year}
                films={character.films}
                />;
            })}
        </StarWars>
    );
}