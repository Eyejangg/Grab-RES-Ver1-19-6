import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import Restaurants from "../components/Restaurants";

export default function AddRestaurants() {
            const [restaurant, setRestaurants] = useState({
                title: "",
                type: "",
                img: "",
            });

    
                const handleChange = (e) => {
                  const {name,value} = e.target;
                  setRestaurants({...restaurant, [name]: value});
                };
            const handleSubmit = () =>{
                try {
                    const response = fetch("http://localhost:3000/restaurants",{
                        method:"POST",
                        body: JSON.stringify(restaurant)
                    });
                    if(response.ok){
                        alert("Restaurant Added successfully!!");
                        setRestaurants({
                            title: "",
                            type: "",
                            img: "",

                        });
                    }
                } catch (error) {
                        console.log(error);

                }
            }
  return (
    
   <div className="container mx-auto">
  
      <Navbar />
      <div className="flex justify-center">
        <h1 className="text-3xl text-center m-5 p-5">
          

        </h1>
                
      </div>
        <div className="flex flex-col items-center gap-4 p-4">
  <h1 className="text-3xl text-center">กรอกข้อมูล</h1>
 <input
        type="text"
        name="title"
        placeholder="ชื่อชา"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
/>
      <input
        type="text"
        name="type"
        placeholder="ประเภท"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />

      <input
        type="text"
        name="img"
        placeholder="URL รูปภาพ"
        className="input input-bordered w-full max-w-xs"
        onChange={handleChange}
      />

        </div>

        <div className="flex justify-center">
            
            <button className="btn btn-success" onClick={handleSubmit}>Add</button>
            <button className="btn btn-primary">Cancle</button>
        </div>
    {restaurant.img && (

  <div className="flex justify-center">
    <img className="h-32" src={restaurant.img} alt="restaurant" />
    
  </div>
  
)}

    </div>
  )
}
