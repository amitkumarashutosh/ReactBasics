import React from "react";
import "./Videos.css";

export default function Videos({
  title,
  description,
  image,
  verify,
  id,
  deleteHandler,
}) {
  return (
    <div className="container">
      <button className="close" onClick={() => deleteHandler(id)}>
        X
      </button>
      <img src={image} alt="" className="container__image" />
      <div className="container__content">
        <h3>
          {title}
          {verify ? "✅" : ""}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
