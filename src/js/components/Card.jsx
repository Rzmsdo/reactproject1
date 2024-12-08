import React from "react";





const Card = (props) => {
  return (
    <div className="card col-10 col-sm-5 col-lg-4 col-xl- m-1 p-0" style={{ width: `300px` }}>
      <img src={props.imageURL} className="card-img-top" alt="Perrito" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          {props.content}
        </p>
        <a href={props.bottonURL} className="btn btn-primary">{props.bottonText}</a>
      </div>
    </div>
  );
};





export default Card;
