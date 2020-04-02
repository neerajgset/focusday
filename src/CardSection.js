import React from "react"

import CardBody from "./CardBody"

const CardSection=()=> {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <CardBody title="Old Street" subTitle="In Japan" buttonTitle="Go to Old Street in Japan" />
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <CardBody title="A Museum" subTitle="In Japan" buttonTitle="Go to Museum in Japan" />
              </div>
            </div>
            <div className="col-4">
              <div className="card" style={{width: "18rem"}}>
                <img
                  src="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="card-img-top"
                  alt="..."
                />
                <CardBody title="A Church" subTitle="In Budapest" buttonTitle="Go to Church in Budapest HU" />
              </div>
            </div>
          </div>
        </div>
      </section>
    )

}

export default CardSection;