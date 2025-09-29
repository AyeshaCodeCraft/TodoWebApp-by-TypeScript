
// src/pages/Home/sections/Categories.tsx

export default function Categories() {
  return (
    <section className="w-full bg-white text-white font-poppins px-5 py-20">
      <div className="max-w-[1170px] mx-auto bg-black flex flex-col lg:flex-row justify-between items-start gap-10 px-10 lg:px-[69px] py-14">
        {/* Left Content */}
        <div className="flex-1 flex flex-col">
          <span className="text-[#00FF66] font-semibold text-base mb-8">
            Categories
          </span>

          <h2 className="text-3xl md:text-5xl font-semibold font-inter leading-[60px] tracking-wide mb-8">
            Enhance Your Music Experience
          </h2>

          {/* Timer Circles */}
          <div className="flex gap-6 mb-10 flex-wrap">
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-black border-2 border-white">
              <span className="font-poppins font-semibold text-lg">23</span>
              <p className="text-xs">Hours</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-black border-2 border-white">
              <span className="font-poppins font-semibold text-lg">05</span>
              <p className="text-xs">Days</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-black border-2 border-white">
              <span className="font-poppins font-semibold text-lg">59</span>
              <p className="text-xs">Minutes</p>
            </div>
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-black border-2 border-white">
              <span className="font-poppins font-semibold text-lg">35</span>
              <p className="text-xs">Seconds</p>
            </div>
          </div>

          <button className="bg-[#00FF66] text-[#FAFAFA] px-12 py-4 text-base font-semibold rounded-md w-fit hover:bg-green-500 transition">
            Buy Now
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center lg:pt-10">
          <img
            src="/assets/categoriesImg.svg"
            alt="Category"
            className="w-full max-w-[600px] drop-shadow-[0px_20px_40px_rgba(255,255,255,0.2)]"
          />
        </div>
      </div>
    </section>
  );
}
