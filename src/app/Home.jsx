import React from 'react'
import SliderComponent from '../components/SliderComponent'
import ShopWrapper from "./ShopWrapper";

function Home() {
  return (
    <div>
      <div className="py-3 px-0 overflow-hidden ">
        <SliderComponent />
      </div>
      <ShopWrapper />
    </div>
  );
}

export default Home
