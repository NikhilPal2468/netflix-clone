import React, { useState, useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'
const Banner = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            // console.log(request.data.results);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, // if movie is null it won't freak out.
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                height: '400px'
            }}> {/* Backgorund Image */}
            <div className="banner_contents">
                {/* title */}
                <h1 className="banner_title">{movie?.name || movie?.title || movie?.original_name || movie?.original_title}</h1>
                {/* div > 2 buttons */}
                <div className="">
                    <button className="banner_buttons">Play</button>
                    <button className="banner_buttons">My List</button>
                </div>

                {/* description */}
                <div className="banner_description">
                    {movie?.overview}
                </div>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
