import React from "react";




const Card = (props) => {
    return (
        <>  

                  <div  className="card">
                   <img src= {props.imgsrc} alt="card-pic"/>
                      <div className="content">
                     
                       <h1 className="heading2">{props.heading}</h1>
                       <p className="para">{props.paragraph}</p>
                      </div>
                    
                    <div className="btn2">
                      <button>{props.button}</button>
                    </div>                                     
                  </div>            
        </>
    )

}

export default Card;