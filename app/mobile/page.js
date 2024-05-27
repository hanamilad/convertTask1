"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp,faBolt,faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';


export const Mobile = () => {
  const [grid,setgridd]=useState([
    {
      icon:faThumbsUp,
      color:"#ea2610",
      titel:"Swap the icon",
    },
    {
      icon:faBolt,
      color:"#359d20",
      titel:"Detach if need",
    },
    {
      icon:faLinkedinIn,
      color:"#f990a5",
      titel:"Toggle icons",
    },
    {
      icon:faBookOpen,
      color:"#2b72ee",
      titel:"Replace a title",
    },

  ])
  return (
 <div className="mobile-section">
        <div className="text"><p>Delivering good designs <span style={{color:"#436bf7"}} >since 1954</span></p></div>
        <div><p style={{padding:"10px",fontWeight:"bold"}}>We are the first muilti-purpose design kit solution for businesses we help you bridge gaps between your </p></div>
        <div className="grid-sec">
        {
          grid.map((ele,index)=>{
            return(
            <div className="sec" key={index}>
            <FontAwesomeIcon icon={ele.icon} className='icon' style={{color:ele.color}} />  

                <h3>{ele.titel}</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, minus.
                </p>
                <button>Learn more</button>
            </div>

            )
          })
        }
          </div>
              
        </div>
  
  )
}
