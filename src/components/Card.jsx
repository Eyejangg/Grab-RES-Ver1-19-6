import React from "react";
{
  /* ส่วนที่เรียน */
}
export const Card = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{props.type}</p>
        {/* ส่วนที่เรียน */}
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Buy Now</div>
          <div className="badge badge-outline">Delete</div>
        </div>
      </div>
    </div>
  );
};
