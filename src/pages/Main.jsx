import React from 'react';
import { useEffect, useState } from 'react';
import requests from '../Request';
import axios from 'axios';
import "./main.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <>
            <div className='blur mb-5' style={{
                height: "690px",
                backgroundSize: "cover",
                backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`
            }}>
                {/* <img style={{}} className="w-100" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} */}
                {/* alt={movie?.title}/> */}
                <div className=''
                    style={{ backgroundColor: " rgba(0, 0, 0, 0.700)", height: "690px" }}>
                    <div className='ms-5'
                        style={{ paddingTop: "200px" }}>

                        <h1 className='text-light '
                            style={{ position: "relative", fontSize: "70px", fontWeight: "600", verticalAlign: " baseline" }}>{movie?.title}</h1>
                        <p className='text-light text-lg' style={{ fontSize: "17px" }}>
                            Released <b>:</b> {movie?.release_date}
                        </p>
                        <p className='w-50 text-light'>
                            {truncateString(movie?.overview)}
                        </p>
                        <button className='px-3 py-1 border-0   ' style={{ fontSize: "15px", backgroundColor: "white", outline: "none" }}><BsFillCaretLeftFill size={25} />Play</button>
                        <button className='px-3 py-2 border-0 ms-2 text-light' style={{ fontSize: "15px", backgroundColor: "rgba(0, 0, 0, 0.668)", outline: "none" }}><AiOutlineInfoCircle size={20} />&nbsp;More Info</button>


                    </div>
                </div>

            </div>



        </>
    )
}

export default Main