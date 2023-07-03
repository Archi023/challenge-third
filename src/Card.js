import React from "react";
import './index.css';

const Card = (props) => {
    return(
        <>
        <div className="card-deck">
        <div className="card my-4 m-2">
        <img src={props.imgsrc} className="card-img-top" alt="card" width="200px" height="200px"/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p class="card-text">{props.sname}</p>  
        <a href={props.links}>
            <button className="btn btn-primary float-end">View details</button></a>
       </div>
      </div>
      </div>
        </>
    );
    };
export default Card; 