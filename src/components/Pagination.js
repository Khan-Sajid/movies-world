import React from 'react';
import "./pagination.css";

function Pagination({ moviesPerPage, totalMovies, paginate }) {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div className='pagination'>
            <ul className='ul'>
                {pageNumbers.map((number) => {
                    return <li className='li' key={number}>
                        <p className='para' onClick={() => {
                            paginate(number)
                        }}> {number} </p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pagination;