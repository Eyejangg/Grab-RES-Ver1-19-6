/* สร้าง useState , useEffect การเพิ่ม Effect บนหน้าจอ*/
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";
import Restaurants from "../components/Restaurants";

const Home = () => {
  /* สร้างuseState เริ่มต้นเป็น Array []*/
  /* restaurants คือค่าปัจจุบันของ state*/
  /* setRestaurants คือฟังก์ชันที่ใช้ในการอัปเดตค่า restaurants*/
  const [restaurants, setRestaurants] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [fileterRestaurants, setfileterRestaurants] = useState([]);

  const handleSearch = (keyword) => {
    setKeyword(keyword); // บันทึก keyword ไว้ใน state ด้วย
    if (keyword === "") {
      setfileterRestaurants(restaurants);
      return;
    }

    const result = restaurants.filter((restaurant) => {
      return (
        restaurant.title.toLowerCase().includes(keyword.toLowerCase()) ||
        restaurant.type.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setfileterRestaurants(result);
  };

  // ทำงานครั้งเดียวตอนโหลด useEffect//
  useEffect(() => {
    //call api: getAllRestaurants เรียก api get all
    fetch("http://localhost:3000/restaurants")
      // convert to Json() แปรสภาพ
      .then((res) => {
        return res.json();
      })
      // คือการรับข้อมูลที่ถูกแปลงเป็น JSON แล้ว จาก API แล้วนำข้อมูลนั้นไปอัปเดตค่า state
      .then((response) => {
        setRestaurants(response);
        setfileterRestaurants(response);
      })
      // จับ Error message
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <h1 className="text-3xl text-center m-5 p-5">
          Grab Restaurant
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>

            <input
              type="search"
              name="keyword"
              onChange={(e) => handleSearch(e.target.value)}
              className="grow"
              placeholder="Search"
            />
          </label>
          {/* ส่วนที่เรียน */}
        </h1>
      </div>

      {/* Result */}
      <div>
        <Restaurants restaurants={fileterRestaurants} />
      </div>
    </div>
  );
};

export default Home;
