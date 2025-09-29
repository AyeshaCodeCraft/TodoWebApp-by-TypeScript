import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function FlashSales() {
    return (
        <section className="w-full bg-white py-12">
            <div className="max-w-[1170px] mx-auto px-4">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                        {/* Heading */}
                        <div>
                            <img src="/assets/FlashSmall.png" alt="dot" className="w-24 mb-2" />
                            <h2 className="text-3xl md:text-4xl font-semibold font-inter text-black">
                                Flash Sales
                            </h2>
                        </div>

                        {/* Timer */}
                        <div className="flex items-center gap-2 pt-4 md:pt-16 md:pl-20">
                            {[
                                { label: "Days", value: "03" },
                                { label: "Hours", value: "23" },
                                { label: "Minutes", value: "19" },
                                { label: "Seconds", value: "56" },
                            ].map((item, i, arr) => (
                                <div key={item.label} className="flex items-center gap-2">
                                    <div className="flex flex-col items-center">
                                        <p className="text-xs font-medium text-black font-poppins">
                                            {item.label}
                                        </p>
                                        <p className="text-2xl md:text-3xl font-bold font-inter">
                                            {item.value}
                                        </p>
                                    </div>
                                    {i < arr.length - 1 && (
                                        <span className="text-red-500 font-semibold text-xl">:</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrows */}
                    <div className="flex gap-3 mt-4 md:mt-0">
                        <button className="sales-prev w-10 h-10 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/icons_arrow-left.svg" alt="Prev" />
                        </button>
                        <button className="sales-next w-10 h-10 rounded-full border border-gray-200 bg-gray-100 flex items-center justify-center">
                            <img src="/assets/nextIcon.svg" alt="Next" />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <Swiper
                    modules={[Navigation]}
                    loop={true}
                    navigation={{ prevEl: ".sales-prev", nextEl: ".sales-next" }}
                    breakpoints={{
                        1200: { slidesPerView: 4.5, spaceBetween: 30 },
                        1024: { slidesPerView: 3, spaceBetween: 25 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        0: { slidesPerView: 1, spaceBetween: 15 },
                    }}
                    className="mb-12"
                >
                    {[
                        {
                            img: "/assets/gamepad.png",
                            badge: "-40%",
                            title: "HAVIT HV-G92 Gamepad",
                            price: "$120",
                            old: "$160",
                            rating: "/assets/Five star.svg",
                            reviews: "(88)",
                        },
                        {
                            img: "/assets/Keyboard.png",
                            badge: "-35%",
                            title: "AK-900 Wired Keyboard",
                            price: "$960",
                            old: "$1160",
                            rating: "/assets/Four Half Star.svg",
                            reviews: "(75)",
                            addToCart: true,
                        },
                        {
                            img: "/assets/Monitor.png",
                            badge: "-25%",
                            title: "RGB Monitor",
                            price: "$370",
                            old: "$400",
                            rating: "/assets/Five star.svg",
                            reviews: "(99)",
                        },
                        {
                            img: "/assets/chair.png",
                            badge: "-25%",
                            title: "S-Series Comfort Chair",
                            price: "$375",
                            old: "$400",
                            rating: "/assets/Four Half Star.svg",
                            reviews: "(45)",
                        },
                        {
                            img: "/assets/chair.png",
                            badge: "-25%",
                            title: "S-Series Comfort Chair",
                            price: "$375",
                            old: "$400",
                            rating: "/assets/Four Half Star.svg",
                            reviews: "(45)",
                        },
                    ].map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className=" overflow-hidden rounded-lg transition-all group">
                                <div className="relative h-64 bg-gray-100 flex items-center justify-center p-6">
                                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-3 py-1 rounded">
                                        {item.badge}
                                    </span>

                                    {/* Icons */}
                                    <div className="absolute top-2 right-2 flex flex-col gap-2">
                                        <img
                                            src="/assets/Fill Heart.svg"
                                            alt="Wishlist"
                                            className="w-7 h-7 cursor-pointer"
                                        />
                                        <img
                                            src="/assets/Fill Eye.svg"
                                            alt="View"
                                            className="w-7 h-7 cursor-pointer"
                                        />
                                    </div>

                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="max-h-40 object-contain"
                                    />

                                    {/* Hover Add to Cart */}
                                    <div className="absolute bottom-0 w-full h-10 bg-black text-white flex items-center justify-center text-sm font-medium font-poppins cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Add to Cart
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-3">
                                    <p className="text-sm font-medium font-poppins">{item.title}</p>
                                    <p className="text-red-600 font-semibold font-poppins">
                                        {item.price}
                                        <span className="line-through text-gray-500 ml-2">{item.old}</span>
                                    </p>
                                    <div className="flex items-center gap-2 mt-2">
                                        <img src={item.rating} alt="stars" className="w-20" />
                                        <span className="text-sm text-gray-500">{item.reviews}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>

                {/* Button */}
                <div className="flex justify-center mb-12">
                    <button className="bg-red-400  text-white px-12 py-4 rounded text-sm font-medium font-poppins">
                        View All Products
                    </button>
                </div>

                <hr className="border-t border-gray-300" />
            </div>
        </section>
    );
}
