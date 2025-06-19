import React from 'react'
import Navbar from '../components/Navbar'
import { Card } from '../components/Card';
import Restaurants from '../components/Restaurants';

const Home = () => {
      {/* ส่วนที่เรียน */}
    return (
        
      <div className="container mx-auto">  
        <Navbar />
        <div className="flex justify-center">
          <h1 className="text-3xl text-center m-5 p-5">
            Grab Restaurant
            <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  
  <input type="search" class="grow" placeholder="Search" />
  
            </label>
              {/* ส่วนที่เรียน */}
            </h1>

            {/* Result */}
            </div>
            <div>
    <Restaurants />
            </div>
            </div>
      
    );
  }
  

export default Home