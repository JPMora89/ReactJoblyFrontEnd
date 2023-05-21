import React, {useContext} from 'react';
import './Homepage.css';
import userContext from './userContext';
import {Link} from 'react-router-dom';




function Homepage() {
  const { currentUser } = useContext(userContext);
  console.log("Home", currentUser)

  return (
    <div >
      <div className="container text-center jobly-welcome">
        
        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p id='homepageP'>Search for your dream job in one, convenient place.</p>
        {currentUser ?
          (
            <h2 className='homepageP2'>Welcome back, {currentUser}!</h2>
          )
          :
          (
            <div className="home-button-container">
              <Link className="home-button btn btn-primary font-weight-bold mr-3"
                to="/login">Log in
              </Link>
              <Link className="home-button btn btn-primary font-weight-bold"
                to="/signup">Sign Up</Link> 
            </div>
          )}
      </div>
    </div>
  )
}

export default Homepage;