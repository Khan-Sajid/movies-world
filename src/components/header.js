import '../App.css';
import { useState, useEffect } from "react";
import Movies from './movies'


function Header({ getData }) {
    const [input, setInput] = useState("");
    const [movie, setMovie] = useState("");
    const [bool, setBool] = useState(false);
    const [sortedData, setSortedData] = useState(getData);
    const [searchArr, setSearchArr] = useState([]);

    function searchFunction() {
        let result = getData.filter((el) => { if (el.Title.toUpperCase().includes(`${movie.toUpperCase()}`) && (movie !== "")) { return el } else { return ""; } });
        setSearchArr(result);
    }

    function byIMDb() {
        setBool(false);
        const resImdb = getData.sort(function (a, b) { return b.imdbRating - a.imdbRating; });
        setSortedData([...resImdb]);
    }

    function byName() {
        setBool(false);
        const resName = getData.sort((a, b) => (a.Title).localeCompare(b.Title));
        setSortedData([...resName]);
    }

    function byYear() {
        setBool(false);
        const resYear = getData.sort(function (a, b) { return b.Year - a.Year; });
        setSortedData([...resYear]);
    }

    function boolfn() {
        if (movie !== "") {
            setBool(true);
        }
        else {
            setBool(false);
        }
    }

    useEffect(() => {
        searchFunction();
        boolfn();
    }, [movie])

    return (
        <>

            <div className='navbar'>
                <div><h1 className='app-title'>Movies World</h1></div>
                <div>
                    <div>
                        <input className='search-input' type="text" placeholder="Search movie by name" value={input} onChange={(event) => { setInput(event.target.value) }} />
                        <button className='search-btn' onClick={() => {
                            setMovie(input);
                            setInput("");
                        }}>Search</button>
                    </div>
                    <div>
                        <button onClick={() => { byIMDb() }} >Sort By IMDb Rating</button>
                        <button onClick={() => { byName() }} >Sort By Name</button>
                        <button onClick={() => { byYear() }} >Sort By Year</button>
                    </div>
                </div>

            </div>
            <div className='movies'>
                {bool
                    ?
                    <>{searchArr.length ? <Movies getData={searchArr} /> : <h1 className='not-found'>Sorry ! No movie found. 😐</h1>} </>

                    : <Movies getData={sortedData} />}
            </div>
        </>
    );
}

export default Header;