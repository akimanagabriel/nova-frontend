import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import noImage from "../images/no-image.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper";
import api from "./../config/basicConfig";
import LoadingComponent from "./LoadingComponent";

function SliderComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect((_) => {
    axios
      .get(api.offlineUrl + "/api/products")
      .then(({ data }) => {
        setProducts(data.filter((d) => d.image[0] && d.name));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}
      {!loading && (
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-[600px] md:w-[850px] h-[50vh]"
        >
          {products.map((p) => (
            <div key={p._id} className="flex">
              <SwiperSlide
                style={{
                  backgroundImage: `url(${p.image || noImage})`,
                  backgroundSize: "cover",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                }}
                key={p._id}
              >
                <div className="flex flex-row md:flex-row items-end justify-start p-10">
                  <div className="pb-10">
                    <h1 className="text-xl md:text-3xl text-red-800 font-bold">
                      {p.name}
                    </h1>
                    <p>{p.description || "Un described"}</p>
                    <button className="bg-red-800 px-5 py-2 border border-red-700 mt-4 rounded-full hover:bg-red-700 text-gray-100">
                      Place Order
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      )}
    </>
  );
}

export default SliderComponent;
