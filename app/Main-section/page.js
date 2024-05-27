"use client"
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faUsers,faUser } from '@fortawesome/free-solid-svg-icons';

export const Section = () => {
    const [text,settext]=useState([
        "Components-driven system","Sales-boosting landing pages","Awesome Feather icons pack"
    ])
  const text2= [...text,"Therned into 3 different styles","Will help to learn figma"]
  const text3=[...text,"Therned into 3 different styles"]
  return (
    <>
            <div class="main-section">  
        <div class="text"><p>Affordable pricing</p></div>
        <div class="sub-text"><p>Bill me <span>monthly</span> . yearly</p></div>
        <div class="card">
            <div class="free Offers">
                <div>
                    <div><p class="title">Personal</p></div>
                    <div><h1>Free<span class="small">/FOREVER</span></h1></div>
                </div>

                <div class="features">
                {
                    text.map((ele,index)=>{ 
                        return(
                        <div key={index}>
                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#a9aaad' }} />

                        <span>{ele}</span>
                    </div>
                        )
                    })
                }
                </div>
                <button class="button-card">Try for free</button>
            </div>
            <div class="individual Offers shadow">      
                <div class="head">
                    <div>
                        <FontAwesomeIcon icon={faUser} />

                        <span class="title">individual</span>
                    </div>
                    <button>REST</button>

                </div>
                <div><h1>$24<span class="small">/MONTH</span></h1></div>
<div class="features">
{
    text2.map((ele,index)=>{
        return(
    <div key={index}>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#FFD43B' }} />

        <span>{ele}</span>
    </div>
        )
    })
}
</div>

                <button class="button-card" style={{color:"white",backgroundColor: "#6555da"}}>Regular license</button>


            </div>
            <div class="Corporate Offers">
                <div>
                    <FontAwesomeIcon icon={faUsers} />
                    <span class="title"> Corporate</span></div>
                <div><h1>$12<span class="small">/EDITOR</span></h1></div>
<div class="features">
{
    text3.map((ele,index)=>{
        return(
    <div key={index}>
        <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#63E6BE' }} />
        <span>{ele}</span>
    </div>

        )
    })
}
</div>

        <button class="button-card">Ectended License</button>
            </div>
 

        </div>

    </div>

    </>
  )
}
