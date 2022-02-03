import React from 'react'
import "./HeaderStyles.css"
import { Link } from "react-router-dom"
import About from './About'
import Skills from './Skills'
import Contact from './Contact'
import ProjectCard from './ProjectCard'
import Home from './Home'

function Header() {
    return (
        <div>
        <div className="navBar">
            
             <Link to={'/home'} component={Home} className='home'>Home</Link>
             <Link to={'/about'} component={About} className='home'>About</Link>
             <Link to={'/skills'} component={Skills} className='home'>Skills</Link>
              <Link to={'/contact'} component={Contact} className='home'>Contact</Link> 
              <Link to={'/project'} component={ProjectCard} className='home'>Projects</Link> 
                
            </div>
            </div>
     
    )
}

export default Header
