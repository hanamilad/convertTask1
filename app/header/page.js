import React from 'react'

export const Header = () => {
  return (
    <div className="header">
        <div className="text">
            <p>Combine <span className="span1">fine</span> images <br/>
            <span className="span2">To represent a product</span> </p>
        </div>
        <div className="overflow">
            <div className="gallery">
                <div className="item">
                <div> Use mixed grid with imagery, replace with your own photos and descriptions</div>
                <div className="color-item-one"></div>
                <button >Learn more</button>
                </div>
                <div className="item" style={{backgroundColor:"#13ae7b",height:"200px",width: "280px"  }}></div>
                <div className="item" style={{backgroundColor:"#a3b0eb", width:"130px", height:"180px"}}></div>
                <div className="item" style={{backgroundColor:"#436bf7", width:"120px", height:"180px"}}></div>
                <div className="item" style={{backgroundColor:"#ff00b1", width:"146px", height:"182px"}}></div>
                <div className="item" style={{backgroundColor:"#5e63d6", width:"270px", height:"210px"}}></div>
            </div>
        </div>
    </div>
  )
}
