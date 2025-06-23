import React from "react";
import { Card } from "./Card";
{
  /* ส่วนที่เรียน */
}
 /* สร้างฟังก์ชันคอมโพเนนต์ชื่อ Restaurants
รับ props ที่ชื่อ restaurants (คือ Array) ที่รับค่ามาจากไฟล์ Home.jsx
*/

export const Restaurants = ({ restaurants }) => {
  /* ส่วนที่เรียน */
  return (
    <div className="flex">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {/* ส่วนที่เรียน */}
        {restaurants &&
          restaurants.map((restaurant) => {
            return (
              <Card
                key={restaurant.id}
                title={restaurant.title}
                type={restaurant.type}
                img={restaurant.img}
              />
            );
          })}
      </div>
    </div>
  );
};
{
  /* ส่วนที่เรียน */
}
export default Restaurants;
