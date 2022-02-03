import React from 'react'
import './contact.css'

    
    function Contact() {
      
   
    return (
        <div>
            
 
       
          <h5>Contact Me : </h5>

        <div className='footer'>
         <a className="git" href="https://github.com/yasminfathimaa9" style={{ color: "black" ,fontSize:"40px"}}>
              <i class="fa fa-github"></i>
            </a>
          
          <a className="git"
              href="mailto:yasminfathimaa9@gmail.com"
              style={{ color: "#D44638" ,fontSize:"40px"}}
            >
              <i class="fa fa-envelope"></i>
            </a>
          

<a className="git" href="https://wa.me/+91 8886865920"  style={{ color: "#445679" ,fontSize:"30px"}} >
                <i class="fab fa-whatsapp"></i></a>

<a className="git" href="tel:+918886865920" style={{fontSize:"30px"}}>
                    <i class="fas fa-phone-alt"></i></a>
               

         
     </div>

        </div>
    )
}

export default Contact
