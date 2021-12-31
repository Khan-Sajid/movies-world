
import React from "react";
import Card from "./card";

function Movies({ getData }) {

    return (
        <>
            {getData.map((el, index) => (
                < Card key={index} element={el} />
            ))}
        </>
    );
}

export default Movies;