import { Button } from '@material-ui/core';
import React from 'react';
import axios from 'axios';

import { useState } from 'react';
import { UserAuth } from '../context/Authcontext';
// import response from 'react';
import "./password.css";
import { useHistory } from 'react-router-dom'

import {

  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react'

const Forgotpassword = () => {
  const [email, setEmail] = useState('')
  const { forgotpassword } = UserAuth()

  const toast = useToast()

  return (
    <>
      <div className="container-fluid frogot pt-5">
        <div className="row mt-5">
          <div className="col-sm-4 ms-auto me-auto mt-5 ">
            <div class="card mt-5 p-3" >
              <div class="card-body">
                {/* <h5 class="card-title"></h5> */}
                <h6 class="card-subtitle mb-2 text-dark text-center">Forgot Password</h6>
                <p className='text-center text-dark' style={{ fontSize: "13px" }}>Enter Your Email To Get Reset Your Password.</p>
                <form onSubmit={async e => {
                  e.preventDefault()
                  forgotpassword(email)
                    .then(response => {
                      console.log(response)
                      toast({

                        description: "Email sent, check ur email ",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })
                    })
                    .catch(e => {
                      console.log(e.message)
                      toast({

                        description: "e.message ",
                        status: 'error',
                        duration: 9000,
                        isClosable: true,
                      })
                    })
                }}>
                  <div class="mb-3 mt-2">
                    {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} class="form-control bg-light mb-2" id="exampleFormControlInput1" placeholder="" autoComplete='email' required />
                    <Button variant='contained' className='bg-warning w-100' type='submit' >Forgot Password</Button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Forgotpassword