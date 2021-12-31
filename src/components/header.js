import '../App.css';
import { useState, useEffect } from "react";
import Movies from './movies'
import Pagination from './Pagination';


function Header({ getData }) {
    const [input, setInput] = useState("");
    const [movie, setMovie] = useState("");
    const [outputData, setOutputData] = useState(getData);
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage] = useState(20);

    function searchFunction() {
        if (movie.length) {
            let result = getData.filter((el) => el.Title.toUpperCase().includes(`${movie.toUpperCase()}`));
            setOutputData([...result]);
        } else {
            setOutputData([...getData]);
        }
    }

    function byIMDb() {
        const resImdb = getData.sort(function (a, b) { return b.imdbRating - a.imdbRating; });
        setOutputData([...resImdb]);
        setCurrentPage(1);
        setMovie("");
    }

    function byName() {
        const resName = getData.sort((a, b) => (a.Title).localeCompare(b.Title));
        setOutputData([...resName]);
        setCurrentPage(1);
        setMovie("");
    }

    function byYear() {
        const resYear = getData.sort(function (a, b) { return b.Year - a.Year; });
        setOutputData([...resYear]);
        setCurrentPage(1);
        setMovie("");
    }

    useEffect(() => {
        searchFunction();
        window.scrollTo(0, 0);
    }, [movie, currentPage])

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = outputData.slice(indexOfFirstMovie, indexOfLastMovie);

    const paginate = (pageNumber) => { setCurrentPage(pageNumber) };

    return (
        <>
            <div className='navbar'>
                <div><h1 className='app-title' onClick={() => { setOutputData(getData) }}>Movies World</h1></div>
                <div>
                    <div>
                        <input className='search-input' type="text" placeholder="Search movie by name" value={input} onChange={(event) => { setInput(event.target.value) }} />
                        <button className='search-btn' onClick={() => {
                            setMovie(input);
                            setInput("");
                            setCurrentPage(1);
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
                {currentMovies.length !== 0 ? <Movies getData={currentMovies} /> : <h1 className='not-found'>Sorry ! No movie found. 😐</h1>}
            </div>
            <div className='pagenum'>Page No. {currentPage}</div>
            <Pagination moviesPerPage={moviesPerPage} totalMovies={outputData.length} paginate={paginate} />
        </>
    );
}

export default Header;