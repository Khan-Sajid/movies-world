import React, { useState } from "react";
import '../App.css';

function Card({ element }) {

    const [bool, setBool] = useState(false);


    return (
        <>
            <div className="card" onMouseEnter={() => { setBool(true) }} onMouseLeave={() => { setBool(false) }}>

                {bool ?
                    <>
                        <h3>{element.Title}</h3>
                        <p><strong>Genre :</strong> {element.Genre}</p>
                        <p><strong>Language :</strong> {element.Language}</p>
                        <p><strong>IMDb :</strong> {element.imdbRating}</p>
                        <p><strong>Release Date :</strong> {element.Released}</p>
                        <p><strong>Runtime :</strong> {element.Runtime}</p>
                        <p><strong>Actors :</strong> {element.Actors}</p>
                        <p><strong>Director :</strong> {element.Director}</p>
                        <p><strong>Metascore :</strong> {element.Metascore}</p>

                    </>
                    :
                    <>
                        <img className="profile-photo" src={element.Poster} alt="Poster" />
                        <h3>{element.Title}</h3>
                    </>}
            </div>

        </>
    );
}
export default Card;