"use client";

import React, { useState, useEffect } from "react";
import rightArrow from "@/assets/images/right-arrow.png";
import s1 from "@/assets/images/s1.png";
import s2 from "@/assets/images/s2.png";
import s3 from "@/assets/images/s3.png";
import s4 from "@/assets/images/s4.png";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  const images = [s1, s2, s3, s4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="d2c_hero"
      className="relative pb-0 pt-12 md:pt-70px lg:pt-[80px] xl:pt-[100px] overflow-hidden min-h-screen"
    >
      {/* Carousel de imágenes de fondo */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Background ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay con blur para contraste */}
      <div className="absolute inset-0 bg-[#443939]/70 backdrop-blur-[4px]"></div>

      {/* Contenido */}
      <div className="container relative h-full md:h-[470px] lg:h-[75vh] xl:h-[700px] 2xl:h-[800px] space-y-3 md:space-y-0 flex flex-col justify-between z-10">
        <h1 className="d2c_title text-5xl md:text-6xl lg:text-[84px] xl:text-[100px] 2xl:text-[117px] font-semibold leading-none text-center md:text-left text-white drop-shadow-lg">
          Luxury Skincare & Aesthetic Treatments in Miami
        </h1>
        <div className="w-full md:w-[50%] lg:w-[55%] pb-5 md:pb-24 lg:pb-44">
          <div className="!space-y-2 md:!space-y-10 text-center md:text-left">
            <p className="text-base md:text-sm lg:text-lg xl:text-lg text-white drop-shadow-md sr-only lg:not-sr-only">
              Licensed & Certified advanced aesthetic services: from Laser Hair
              Removal to Microneedling with Exosomes & PRP, experience the best
              in non-invasive skin rejuvenation in South Florida.
            </p>
            <a
              href="https://glowingskinbar.glossgenius.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="d2c_btn d2c_primary_btn w-full md:max-w-max text-center justify-center flex items-center gap-2"
            >
              Book Now
              <Image
                src={rightArrow}
                alt="Right Arrow"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="md:absolute right-0 bottom-0 w-full md:w-[350px] lg:w-[450px] xl:w-[500px] 2xl:w-[580px]">
          {/* <Image src={heroImg} className="w-full h-full" alt="Hero Image" /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
