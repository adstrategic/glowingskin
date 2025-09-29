import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/assets/images/hero-image.png";

const ServicesHero = () => {
  return (
    <div className=" relative overflow-hidden">
      {/* Header */}

      {/* Main Hero Content */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="flex-1 lg:w-1/2 z-10 relative">
            <div className="max-w-lg">
              {/* Main Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-black leading-tight mb-6">
                Because You Deserve The Best Skin Tone
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                We provide beauty and treatment services with best quality and
                price. Believe us.
              </p>

              {/* CTA Button */}
              <Link
                href="/appointment"
                className="inline-block bg-[#5D4E37] text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-[#4A3E2E] transition-colors duration-300"
              >
                Ready to relax?
              </Link>
            </div>
          </div>

          {/* Right Content - Image and Reviews */}
          <div className="flex-1 lg:w-1/2 relative mt-12 lg:mt-0 flex items-center ">
            {/* Woman Image - Centered */}
            <div className="relative z-20">
              <div className="relative">
                {/* Woman image */}
                <div className="w-[280px] h-[400px] md:w-[320px] md:h-[450px] lg:w-[350px] lg:h-[500px] xl:w-[400px] xl:h-[550px] relative overflow-hidden">
                  <Image
                    src={heroImage}
                    alt="Beautiful woman with glowing skin"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Quote Section - Positioned relative to the centered image */}
            <div className="absolute top-0 right-0 lg:-right-4 xl:-right-8 z-30 max-w-xs">
              <div className="text-right">
                {/* Orange Quote Icon */}
                <div className="text-5xl md:text-6xl lg:text-7xl text-[#D2691E] mb-2 leading-none">
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed">
                  Let your worries go away with Our indulgent{" "}
                  <span className="text-[#D2691E] font-semibold">
                    beauty treatments
                  </span>
                </p>
              </div>
            </div>

            {/* Rating Section - Positioned relative to the centered image */}
            <div className="absolute bottom-0 right-0 lg:-right-4 xl:-right-8 z-30">
              <div className="text-right">
                {/* Rating Number */}
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2">
                  9.5
                </div>

                {/* Stars */}
                <div className="flex justify-end mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-800"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Reviews Count */}
                <p className="text-gray-600 text-xs md:text-sm">20 Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      {/* Pink Roses */}
      <div className="absolute bottom-0 left-0 z-10 hidden lg:block">
        <div className="w-20 h-20 opacity-30">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle cx="20" cy="80" r="8" fill="#FFB6C1" />
            <circle cx="35" cy="75" r="6" fill="#FFB6C1" />
            <circle cx="50" cy="80" r="7" fill="#FFB6C1" />
            <path
              d="M15 85 Q25 70 35 85 Q45 70 55 85"
              stroke="#90EE90"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Background Texture */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div> */}
    </div>
  );
};

export default ServicesHero;
