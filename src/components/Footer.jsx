import { Link } from 'react-router-dom';
import React from 'react';  
// import { Route } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className='container-fluid ' style={{ backgroundColor:"black" , borderTop:"15px solid rgb(27, 25, 25) "}}>
          <div className="row p-5">
          <Link to="/" className='text-decoration-none' ><p className='ms-5 ps-4 text-secondary' style={{fontSize:"15px"}}>Questions? Call 000-800-040-1843</p></Link>
              <div className="col-sm-3 ">
                
              <ul className='ms-5 mt-5'>
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto' style={{listStyle:"none"}}>FAQ</li></Link>
                 
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Investor Relations</li></Link>

                <Link to='/' className='text-decoration-none text-secondary'>  <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Privacy</li></Link>

               <Link to='/' className='text-decoration-none text-secondary'>   <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Speed Test</li></Link>

              </ul>




              </div>
              <div className="col-sm-3 ">
              <ul className='ms-5 mt-5'>
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto' style={{listStyle:"none"}}>Help Centre</li></Link>
                 
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Jobs</li></Link>

                <Link to='/' className='text-decoration-none text-secondary'>  <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Cookie Preferences</li></Link>

               <Link to='/' className='text-decoration-none text-secondary'>   <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Legal Notices</li></Link>

              </ul>
              </div>
              <div className="col-sm-3 ">
              <ul className='ms-5 mt-5'>
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto' style={{listStyle:"none"}}>Account</li></Link>
                 
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Ways to Watch</li></Link>

                <Link to='/' className='text-decoration-none text-secondary'>  <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Corporate Information</li></Link>

               <Link to='/' className='text-decoration-none text-secondary'>   <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Only on Netflix</li></Link>

              </ul>
              </div>
              <div className="col-sm-3  ">
              <ul className='ms-5 mt-5'>
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto' style={{listStyle:"none"}}>Media Centre</li></Link>
                 
                 <Link to='/' className='text-decoration-none text-secondary'> <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Terms of Use</li></Link>

                <Link to='/' className='text-decoration-none text-secondary'>  <li className='ms-auto me-auto mt-3' style={{listStyle:"none"}}>Contact Us</li></Link>

              

              </ul>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer