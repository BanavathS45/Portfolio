import React from 'react'
import { NavLink } from 'react-router-dom'

const OtherProject = () => {
  return (
    <div className='projectMain'>
       <div className="project-title">
        <h1>OTHER PROJECTS</h1>
      </div>
      <div className="routers">
      <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/portfolio/mobileapp">Mobile</NavLink>
        <NavLink to="/portfolio/website">Website</NavLink>
        <NavLink to="/portfolio/desktop">Desktop</NavLink>
        <NavLink to="/portfolio/other">Other Projects</NavLink>
      </div>
    </div>
  )
}

export default OtherProject