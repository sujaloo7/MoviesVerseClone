import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/Authcontext';
import { useState } from 'react';



const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, signUp } = UserAuth();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            navigate('/success')
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <div className="container-fluid outer-div">
                <div className=" ">

                    <div className="row">
                        <div className='col-sm-5 mt-5    form-outer   ms-auto me-auto p-3 inner-div'>
                            <h3 className='text-light pt-5 text-center'><span className='text-warning' >S</span>IGN-UP</h3>
                            <form className='col-sm-6 ms-auto me-auto '
                                onSubmit={handleSubmit}>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label ">Email address</label>
                                    <input type="email" class="form-control border-0 p-2" id="exampleFormControlInput1" placeholder="name@example.com"
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete='email' required
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label ">Password</label>
                                    <input type="password" class="form-control border-0 p-2" id="exampleFormControlInput1" placeholder="......."
                                        onChange={(e) => setPassword(e.target.value)}
                                        autoComplete='current-password' required
                                    />
                                </div>


                                <button className=' btn btn-warning  mt-3 w-100 py-2 rounded font-bold' >SignUp</button>
                                <div className='d-flex mt-2 text-light '>
                                    <p>
                                        <input className='mr-2 bg-warning' type='checkbox' />&nbsp;
                                        Remember me
                                    </p>
                                    <p className='ms-auto'>Need Help?</p>
                                </div>
                                <p className='py-3 text-light'>
                                    <span className='text-gray-600'>Already Have Account
                                        ?</span>{' '}
                                    <Link to='/login' className='text-decoration-none text-warning'>Login</Link>
                                </p>

                            </form>



                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Signup