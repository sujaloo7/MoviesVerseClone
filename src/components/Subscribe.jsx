import React from 'react'

const Subscribe = () => {
  return (
    <>
    <div className="container">
        <div className="row p-4 ">
            <div className="col-sm-6 ms-auto me-auto mb-5">
                <p className=' text-light text-center' style={{ fontSize:"14px"}}>Ready to watch? Enter your email address to create Your Account</p>
            <div class=" form-floating mb-3 d-flex">
  {/* <label for="exampleFormControlInput1" class="form-label">Email address</label> */}
  {/* <input type="email" class="form-control border-0 p-3" id="exampleFormControlInput1" placeholder=""/> */}
  <input type="email" class="form-control border-0 p-3" id="floatingInput" placeholder="name@example.com" required/>
  <label for="floatingInput">Email address</label>
  <button className="btn btn-warning px-5" style={{fontWeight:"bold" , fontSize:"17px"}}>Start</button>
</div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Subscribe