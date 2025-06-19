import React from 'react'

export const Card = (props) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">

  <figure>
    <img
      src={props.img}
      alt="Shoes" />
  </figure>
  <div className="card-body">

    <h2 className="card-title">
      {props.title}
      <div className="badge badge-secondary">NEW</div>
    </h2>

    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

    <div className="card-actions justify-end">
      <div className="badge badge-outline">Buy Now</div>
      <div className="badge badge-outline">Delete</div>
    </div>
  </div>
</div>
  )
}
