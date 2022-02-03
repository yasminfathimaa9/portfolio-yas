import React from 'react'
import './Project.css'
// import Projects from './Projects'
function ProjectCard() {
    return (
        <div>

            <h5>Some projects Done By Me</h5>
           <li> <a className='project'
            href="https://yasmin-merchstore.netlify.app/"
            alt="image"  >Ecommerce Api</a>

            
            </li>


            <li>
                <a className='project'
                href="https://yasmin-reactapp.netlify.app/" alt="image" >Breaking Bad Api</a>
            </li>
            
           {/* <li>
               <a className='project'
               href="https://focused-brown-d8f25d.netlify.app/">Join Our Community</a>
           </li> */}
        </div>
    )
}

export default ProjectCard
