

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// icons from public folder
export default function Browse() {
    const items = [
        { img: "/assets/phone.svg", label: "Phones" },
        { img: "/assets/computer.svg", label: "Computer" },
        { img: "/assets/smartWatch.svg", label: "SmartWatch" },
        { img: "/assets/camera.svg", label: "Camera" },
        { img: "/assets/headphone.svg", label: "Headphones" },
        { img: "/assets/gamePad.svg", label: "Gaming" },
    ];

    return (
        <section className="w-full bg-white px-5 py-12">
            <div className="max-w-[1170px] mx-auto">
                {/* Top Row */}
                <div className="flex justify-between items-center mb-10">
                    <div className="flex flex-col gap-5">
                        <img src="/assets/BrowseIcon.svg" alt="icon" className="w-[120px]" />
                        <h2 className="text-2xl md:text-3xl lg:text-[36px] leading-[48px] tracking-wide font-inter font-semibold">
                            Browse By Category
                        </h2>
                    </div>

                    <div className="flex gap-2">
                        <button className="browse-prev w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
                            <img src="/assets/icons_arrow-left.svg" alt="Prev" className="w-4 h-4" />
                        </button>
                        <button className="browse-next w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
                            <img src="/assets/nextIcon.svg" alt="Next" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Swiper Row */}
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={{ prevEl: ".browse-prev", nextEl: ".browse-next" }}
                    breakpoints={{
                        1200: { slidesPerView: 5, spaceBetween: 30 },
                        1024: { slidesPerView: 5, spaceBetween: 25 },
                        768: { slidesPerView: 3, spaceBetween: 20 },
                        0: { slidesPerView: 2, spaceBetween: 15 },
                    }}
                    className="browse-slider"
                >
                    {items.map((item, index) => (
                        <SwiperSlide key={index} className="flex justify-center">
                            <div
                                className="w-full h-[150px] max-w-[200px] border border-gray-300 rounded-lg 
                           flex flex-col justify-center items-center gap-3 cursor-pointer 
                           transition-all duration-300 mt-14 p-3 hover:border-[#DB4444] hover:text-[#DB4444]"
                            >
                                <img src={item.img} alt={item.label} className="w-12 h-12 object-contain" />
                                <p className="text-sm font-poppins font-medium text-center truncate w-full">
                                    {item.label}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Bottom Line */}
                <hr className="w-full h-[1px] bg-gray-300 mt-16 border-0" />
            </div>
        </section>
    );
}
