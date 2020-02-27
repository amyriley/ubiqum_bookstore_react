import React from "react";

import "./OneBook.css";

const OneBook = props => {
  return (
    <div>
      <div className="card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <div className="card-body" id="card-body-front">
                <img src={props.img} />
              </div>
            </div>
          </div>
          <div className="flip-card-back">
            <div className="card-body" id="card-body-back">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <a>More Info</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneBook;
