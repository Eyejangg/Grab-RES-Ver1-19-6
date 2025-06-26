import React from "react";
{
  /* ส่วนที่เรียน */
}
export const Card = (props) => {
  const handleDelete = async (id) => {
    try {
      const response = fetch("http://localhost:3000/restaurants/" + id, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Restaurant Del successfully!!");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

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
        {/* ส่วนที่เรียน */}
        <div className="card-actions justify-end">
          <a href={"/update/" + props.id} className="btn btn-warning">
            Update
          </a>
          <button
            onClick={() => handleDelete(props.id)}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
