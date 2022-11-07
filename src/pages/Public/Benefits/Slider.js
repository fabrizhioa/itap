import React, { useEffect } from "react";
import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { SliderBeneficios } from "../../../data";

const Slider = () => {
  const [showImage, setShowImage] = useState(0);

  const HandleLeft = () => {
    if (showImage > 0) {
      setShowImage(showImage - 1);
    } else {
      setShowImage(SliderBeneficios.length - 1);
    }
  };

  const HandleRight = () => {
    if (showImage < SliderBeneficios.length - 1) {
      setShowImage(showImage + 1);
    } else {
      setShowImage(0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (showImage < SliderBeneficios.length - 1) {
        setShowImage(showImage + 1);
      } else {
        setShowImage(0);
      }
    }, 8000);
    return () => clearTimeout(timer);
  }, [showImage]);

  return (
    <div className="order-3 flex relative items-center">
      <button
        className="absolute z-20 text-black text-5xl left-4"
        onClick={HandleLeft}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute z-20 text-black  text-5xl right-4 w-max justify-self-end"
        onClick={HandleRight}
      >
        <BsChevronRight />
      </button>
      {SliderBeneficios.map((sb, key) => (
        <img
          key={key}
          src={sb.image}
          alt=""
          className={
            key === showImage
              ? "opacity-100 z-10 transition-opacity duration-300	"
              : "absolute opacity-0 z-0 transition-opacity duration-300	"
          }
        />
      ))}

      <div className="absolute self-center justify-items-center w-full p-2 text-center flex items-center justify-center gap-2 m-auto  bottom-0  z-20">
        {SliderBeneficios.map((sb, key) => (
          <button
            className={
              "rounded-full  w-2 h-2 aspect-square " +
              (key === showImage
                ? "border-tc border-[1px]"
                : "bg-tc ")
            }
            type="button"
            onClick={() => setShowImage(key)}
            key={key}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
