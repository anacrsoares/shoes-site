import { useState } from "react";
import "./Card.css";

export default function Related(props) {
  return (
    <div className="related-card">
      <h2>{props.title}</h2>
      <div>
        <div className="related-image">
          <img src={props.img} />
        </div>

        <div className="related-information">
          <div className="related-price">{props.price}</div>
        </div>
      </div>
    </div>
  );
}
