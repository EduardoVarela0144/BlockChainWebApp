import React from "react";
import { CarouselImages } from "@constants/Carouselmages";
import { Carousel } from "antd";

export default function CustomCarousel() {
  return (
    <div>
      <Carousel autoplay>
        {CarouselImages.map((image, index) => (
          <div key={index} className="relative flex-1 h-screen overflow-hidden">
            <img
              src={image?.image}
              alt={`Imagen ${index + 1}`}
              className="h-full w-full object-cover filter brightness-75 hover:brightness-100 transition-brightness duration-300"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 text-white  font-bold bg-black bg-opacity-50">
              <span className="opacity-100 text-center text-6xl">
                {image?.area}
              </span>
              <span className="opacity-100 text-center text-xl text-BC">
                {image?.text}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
