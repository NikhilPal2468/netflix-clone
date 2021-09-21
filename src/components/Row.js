import axios from '../axios';
import React, { useState, useEffect } from 'react'
import "./Row.css";
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
const baseUrl = "https://image.tmdb.org/t/p/original/"
const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        // if [], run only once when the row loads
        // if [input], runs  when the row loads and also when input changes.
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results);
            return request
        }
        fetchData();
    }, [fetchUrl])
    // console.table(movies)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }
        else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || "inception")
                .then(url => {
                    console.log(url);
                    console.log(typeof (movie));
                    var video_id = url.split('v=')[1];
                    var ampersandPosition = video_id.indexOf('&');
                    if (ampersandPosition !== - 1) {
                        video_id = video_id.substring(0, ampersandPosition);
                    }
                    console.log(video_id);
                    setTrailerUrl(video_id);
                    // const urlParams = new URLSearchParams(new URL(url).search);
                    // console.log(urlParams.get("v"));
                })
                .catch(err => console.log(err))

            // const video = await yt.search(movie?.name || "")
            console.log("nik");
        }
    }
    return (
        <div className="row">
            {/* title */}
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id} onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
