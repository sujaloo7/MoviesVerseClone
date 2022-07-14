import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import Snackbar from '@mui/material/Snackbar';
import { AiOutlineCloseCircle } from "react-icons/ai";


import './login.css';
// import { Link } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
import { useState } from 'react';




const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { user, logIn } = UserAuth()
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            await logIn(email, password)
            navigate('/')
        }
        catch (error) {
            console.log(error)
            setError(error.message)
        }
    };
    return (
        <>
            <div className=''>

            </div>
            <div className="container-fluid outer-div">
                <div className=" ">

                    <div className="row">
                        <div className='col-sm-5 mt-5    form-outer   ms-auto me-auto p-3 inner-div'>
                            <h3 className='text-light pt-5 text-center'><span className='text-warning'>L</span>OGIN</h3>
                            <form className='col-sm-6 ms-auto me-auto '

                                onSubmit={handleSubmit}>

                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label ">Email address</label>
                                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control border-0 p-2" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label ">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control border-0 p-2" id="exampleFormControlInput1" placeholder="......." />
                                </div>


                                <button className=' btn btn-warning mt-3 w-100 py-2 rounded font-bold'>Login</button>
                                <div className='d-flex mt-2 text-light '>
                                    <p>
                                        <input className='mr-2 bg-warning' type='checkbox' />&nbsp;
                                        Remember me
                                    </p>
                                    <p className='ms-auto'>Need Help?</p>
                                </div>
                                <p className='py-3 text-light'>
                                    <span className='text-gray-600'>New to Watch With Nicky
                                        ?</span>{' '}
                                    <Link to='/signup' className='text-decoration-none text-warning'>Sign Up</Link>
                                </p>

                                {error ? <p className='p-2 bg-danger text-light my-2 mt-3'><AiOutlineCloseCircle size={20} />&nbsp;{error}</p> : null}


                            </form>



                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Login