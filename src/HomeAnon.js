import React, {useContext} from 'react';
import './Homepage.css';
import userContext from './userContext';
import {Link} from 'react-router-dom';
import './HomeAnon.css';




function HomeAnon() {


  return (

            <div id='HomepageAnonDiv' className="home-button-container">
                        <h1 className="mb-4 font-weight-bold">Jobly</h1>
        <p id='HomepageAnonP' className="homepageP2">Get started finding your dream job!</p>
              <div id='HomepageAnonButtons'>
              <Link id='loginbutton' className="home-button btn btn-primary font-weight-bold mr-3"
                to="/login">Log in
              </Link>
              <Link id='signupbutton' className="home-button btn btn-primary font-weight-bold"
                to="/signup">Sign Up</Link> 
           </div>
            </div>
          )}


export default HomeAnon;