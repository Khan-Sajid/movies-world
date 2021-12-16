import react from "react";
import '../App.css';
import { useState, useEffect } from "react";
import Movies from './movies'


function Header({ getData }) {
    const [input, setInput] = useState("");
    const [movie, setMovie] = useState("");
    const [imdbArr, setImdbArr] = useState(getData);
    const [metaScore, setMetaScore] = useState(getData);
    const [yearWise, setYearWise] = useState(getData);
    const [outputarr, setOutputarr] = useState(getData);

    function searchFunction() {
        const result = outputarr.filter((el) => { el.Title.includes(`${movie}`) });
        setOutputarr(result);
    }
    function byIMDb() {
        const resImdb = getData.sort(function (a, b) { return b.imdbRating - a.imdbRating; });
        setImdbArr(resImdb);
    }
    function byBoxOffice() {
        const resMetaScore = getData.sort(function (a, b) { return b.Metascore - a.Metascore; });
        setMetaScore(resMetaScore);
    }
    function byYear() {
        const resYear = getData.sort(function (a, b) { return b.Year - a.Year; });
        setYearWise(resYear);
    }
    useEffect(() => {

    }, [movie])

    return (
        <>
            <div><h1>Movies World</h1></div>
            <div>
                <div>
                    <input type="text" placeholder="Search movie by name" value={input} onChange={(event) => { setInput(event.target.value) }} />
                    <button onClick={() => {
                        setMovie(input);
                        searchFunction(movie);
                        setInput("");
                    }}>Search</button>
                </div>
                <div>
                    <button onClick={() => { byIMDb() }} >Sort By IMDb Rating</button>
                    <button onClick={() => { byBoxOffice() }} >Sort By Metascore</button>
                    <button onClick={() => { byYear() }} >Sort By Year</button>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                    <Movies getData={getData} />
                </div>
            </div>
        </>
    );
}

export default Header;