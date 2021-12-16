
import React, { useState, useEffect } from "react";
import Card from "./card";

function Movies({ getData }) {

    return (
        <>
            {getData.map((el) => (
                < Card element={el} />
            ))}
        </>
    );
}

export default Movies;