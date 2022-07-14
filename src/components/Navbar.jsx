import React from 'react';
import logo from "../images/favicon.ico";
import './navbar.css';
import profile from "../images/profile.jpg"
import {
    FcHome,
    FcClapperboard,
    FcLink,
    FcPlanner,
    FcVip,
    FcTabletAndroid,
    FcGlobe,
    FcMenu,
    FcLike,
    FcClock
} from "react-icons/fc";

import { FiLogIn, } from "react-icons/fi";
import { Button } from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Button, ButtonGroup } from '@chakra-ui/react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login')
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-dark py-3 fixed-top ">
                <div class="container-fluid">
                    <Link to='/' class="navbar-brand text-light  " ><img src={logo} height={33} /><b>Watch With Nicky</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"><FcMenu size={30} /></span>
                    </button>


                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/"><FcHome size="20" />&nbsp;HOME</Link>
                            </li>
                            &nbsp;

                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FcClapperboard size="20" />&nbsp;MOVIES
                                </a>
                                <ul class="dropdown-menu p-2" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">LATEST RELEASED</a></li>
                                    <li><a class="dropdown-item" href="#">HOLLYWOOD</a></li>
                                    <li><a class="dropdown-item" href="#"> DUAL AUDIO</a></li>
                                    <li><a class="dropdown-item" href="#">MULTI AUDIO</a></li>

                                    <li><a class="dropdown-item" href="#">HINDI MOVIES </a></li>

                                    <li><a class="dropdown-item" href="#">ENGLISH MOVIES</a></li>

                                    <li><a class="dropdown-item" href="#">ADULT MOVIES</a></li>

                                    <li><a class="dropdown-item" href="#">ASIAN MOVIES</a></li>

                                    <li><a class="dropdown-item" href="#">HACKING MOVIES</a></li>

                                </ul>
                            </li>
                            &nbsp;

                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FcLink size="20" />&nbsp;GENRE
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">ACTION</a></li>
                                    <li><a class="dropdown-item" href="#">ADVENTURE</a></li>
                                    <li><a class="dropdown-item" href="#">ANIMATED</a></li>
                                    <li><a class="dropdown-item" href="#">COMEDY</a></li>
                                    <li><a class="dropdown-item" href="#">CRIME</a></li>
                                    <li><a class="dropdown-item" href="#">FANTASY</a></li>
                                    <li><a class="dropdown-item" href="#">HORROR</a></li>
                                    <li><a class="dropdown-item" href="#">MYSTERY</a></li>
                                    <li><a class="dropdown-item" href="#">SI-FI</a></li>
                                    <li><a class="dropdown-item" href="#">ROMANCE</a></li>
                                    <li><a class="dropdown-item" href="#">THRILLER</a></li>
                                    <li><a class="dropdown-item" href="#">DOCUMENTARY</a></li>
                                </ul>
                            </li>
                            &nbsp;

                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    < FcPlanner size="20" />&nbsp;YEAR
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            &nbsp;

                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FcVip size="20" />&nbsp;Quality
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            &nbsp;
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FcTabletAndroid size="20" />&nbsp;TV SHOWS
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            &nbsp;
                            <li class="nav-item dropdown">
                                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FcGlobe size="20" />&nbsp;WEB SERIES
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            &nbsp;
                            {/* <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li> */}
                        </ul>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                        {/* <Button className='mat bg-warning' variant="contained" size="small"><FcLike size={20} />&nbsp;wishlist</Button> &nbsp;
                        <Button className='mat  text-light' variant="contained" size="small" color="secondary"><FcClock size={15} />Watch History</Button> */}

                        {user?.email ? (
                            <div>


                                <NavLink to="/account">
                                    <button className='btn btn text-light '><img src={profile} className="" style={{ borderRadius: "100%", outline: "none" }} width={30} height={30} data-bs-toggle="tooltip" title="Account" /></button>
                                </NavLink>
                                <Link to="/login">
                                    <button onClick={handleLogout} style={{ fontSize: "12px" }} className=' btn btn text-light'>LogOut</button>
                                </Link>
                            </div>
                        ) : (
                            <div>


                                <Link to='/login' className='text-decoration-none text-dark'>
                                    {/* <Button className='mat  ' variant="contained" size="small" color="inherit">< FiLogIn size={15} />&nbsp;Login</Button> */}
                                    <button class="btn-6 px-3 py-1"><span>< FiLogIn size={15} />&nbsp;&nbsp;Login</span></button>
                                    {/* <Button colorScheme='teal' size='xs'>
                                Button
                            </Button> */}
                                </Link>

                            </div>
                        )}




                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar