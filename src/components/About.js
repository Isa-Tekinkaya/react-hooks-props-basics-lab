import React from "react";
import Links from "./Links"
function About(prop) {  
  
    
      return (
      <div id="about">
        <h2>About Me</h2>
        {prop.bio ? <p>{prop.bio}</p> : null}
        
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      </div>
  )
  }
  



export default About;
