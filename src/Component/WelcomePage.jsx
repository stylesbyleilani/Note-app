
import React from 'react'
import { Link } from 'react-router-dom'
import pic from "./undraw_add_notes_re_ln36.svg"

const WelcomePage = () => {
  return (
    <div>
        <div className="welcome">
          <img src={pic} alt="" />
        </div>
        <div className="welcome-btn-div">
        <Link to="/notes" ><button className='welcome-btn'>Get Started</button></Link>
        </div>
    </div>
  )
}

export default WelcomePage
