import React from "react"

const CardBody=({title="Default Title", subTitle="Feed in Brief Description", buttonTitle="Default Button"})=>{
    return (        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subTitle}</p>
          <a href="#" className="btn btn-success">{buttonTitle}</a>
        </div>        
    )
}

export default CardBody;