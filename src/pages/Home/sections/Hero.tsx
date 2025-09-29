
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/pagination";

const slides = [
  { title: "iPhone 14 Series", heading: "Up to 10% off Voucher" },
  { title: "iPhone 14 Pro", heading: "Best Deal Today" },
  { title: "iPhone 14 Max", heading: "Limited Time Offer" },
  { title: "iPhone 14 Mini", heading: "Special Discount" },
  { title: "iPhone 14 Ultra", heading: "Save Big on Your Upgrade" }
];

export default function Hero() {
  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-[1170px] mx-auto bg-black px-5 md:px-10 mb-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-white">
                {/* Left Content */}
                <div className="flex flex-col gap-5 md:gap-6 text-left md:text-left items-start md:items-start">
                  <div className="flex items-center gap-2 text-base font-poppins">
                    <img
                      src="/assets/Apple.svg"
                      alt="Apple Logo"
                      className="w-10 h-auto"
                    />
                    <span>{slide.title}</span>
                  </div>
                  <h1 className="font-inter font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug max-w-[300px] md:max-w-[400px]">
                    {slide.heading}
                  </h1>
                  <div className="flex items-center gap-2 font-poppins text-base font-medium cursor-pointer">
                    <span className="border-b-2 border-white pb-1">Shop Now</span>
                    <img
                      src="/assets/icons arrow-right.svg"
                      alt="arrow"
                      className="w-6 h-auto"
                    />
                  </div>
                </div>

                {/* Right Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/assets/heroImg.svg"
                    alt="Hero"
                    className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
