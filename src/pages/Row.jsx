import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
// import { Heart, ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import "../index.css";
import "./row.css";
// import "https://cdn.tailwindcss.com";
import requests from '../Request';
// import { Link } from 'react-router-dom';
import { AiFillHeart } from "react-icons/ai";



const Row = ({ title, fetchURL }) => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)];

    // const [like, setLike] = useState(false)

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        }
        )
    }, [fetchURL]
    )

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };
    return (
        <>



            <main>
                <div class="container">
                    <div class="carousel my-carousel-3">
                        <h2 className='text-white  pl-5' style={{ fontSize: "15px" }}>{title}</h2>

                        <div class="carousel__container">
                            {movies.map((item, id) => (
                                <div class="   card  carousel__box movie border-0 bg-dark text-light">
                                    <div class="card-img"><img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} /></div>
                                    <div class="card-title text-light"> {item.title}</div>
                                    <div class="card-content"> <p>
                                        {truncateString(item?.overview, 100)}

                                    </p> </div>
                                    <div class="card-link d-flex"><a href=""> View More</a>
                                        <AiFillHeart className='text-warning' />
                                    </div>
                                </div>
                            ))}

                            {/* <div class="card movie ">
                                    <img />
                                    <div className='' style={{ backgroundColor: "rgba(0, 0, 0, 0.741)" }}>
                                        <div class="card-content " style={{ height: "100%", width: "100%" }}>
                                            <h5 className='mb-3  '>
                                               


                                            </h5>

                                           
                                            <a href="#" class="button">
                                                Find out more

                                            </a>

                                        </div>
                                    </div>


                                </div> */}


                        </div>

                    </div>





                    {/* <div class="carousel my-carousel-2">
      <div class="carousel__container">
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,abstract"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,color"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,woman"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,travel"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,architecture"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,geometry"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,abstract,geometry"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,summer"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,color"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
      </div>
    </div> */}
                    {/* <div class="carousel my-carousel-4">
      <div class="carousel__container">
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,abstract"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,color"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,woman"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,travel"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,architecture"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,geometry"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,abstract,geometry"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,summer"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,color"/></div>
        <div class="carousel__box"><img src="https://source.unsplash.com/random/800x600/?art,design"/></div>
      </div>
    </div> */}
                </div>
            </main>


        </>
    )
}

export default Row