"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll,faBars,faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export const Nav = () => {
    const [list,setlist]=useState([
        "How it works","Who we are","what we do","Contact us"
    ])
    const [active, setActive] = useState(null);
    const [isVisible, setVisible] = useState(false);
    const click = (index) => {
        setActive(index);
    };
    const showMenu = () => {
        setVisible(true);
    };

    const closeMenu = () => {
        setVisible(false);
    };
  return (
    <div>
    <div className="nav">
       <div className="grid">
            <FontAwesomeIcon icon={faBorderAll} className='faBorderAll' />
            <FontAwesomeIcon icon={faBars} className='fa-bars' onClick={showMenu} />

           <h1>Grid</h1>
       </div>
       <div className="button-bage"> 
           <ul className="links">
               {
                list.map((li,index)=>{
                    return(
                        <li key={index}
                            className={active === index ? 'active' : ''}
                            onClick={() => click(index)}
                        >{li}</li>
                    )
                })
               }
           </ul>
       </div>
       <div className="sign">
           <button>Sign in</button>
       </div>
   
   </div>
   <div  className={`overlay-menu ${isVisible ? 'visible' : ''}`}>
   <FontAwesomeIcon id="close" onClick={closeMenu} icon={faCircleXmark} style={{color:"#ff0000"}} />

       <ul className="links">
       {
                list.map((li,index)=>{
                    return(
                        <li key={index}
                            className={active === index ? 'active' : ''}
                            onClick={() => click(index)}
                        >{li}</li>
                    )
                })
               }
       </ul>
   </div> 
     
   </div>
  )
}
