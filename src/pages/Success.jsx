import React from 'react';
import { Link } from 'react-router-dom';
import "./success.css";

const Success = () => {
  return (
    <div>
      <div class="content mt-5">
        <div class="wrapper-1">
          <div class="wrapper-2">
            <h1 className='head'>Thank you !</h1>
            <p>Unlimited movies, TV shows and more. </p>
            <p>Watch anywhere. Cancel anytime.</p>
            <Link to="/">
              <button class="go-home bg-dark">
                go home
              </button>
            </Link>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Success