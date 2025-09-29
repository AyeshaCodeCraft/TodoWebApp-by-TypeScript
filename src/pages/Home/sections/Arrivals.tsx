
export default function Arrivals() {
  return (
    <section className="w-full bg-white py-16 px-5 font-poppins">
      <div className="max-w-[1170px] mx-auto">
        {/* Header */}
        <div className="flex flex-col gap-5 mb-14">
          <img src="/assets/ArrivalTop.svg" alt="icon" className="w-[110px]" />
          <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-inter font-semibold leading-[48px]">
            New Arrival
          </h2>
        </div>

        {/* Main Row */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Box (PS5) */}
          <div className="flex-1 relative bg-black text-white h-[600px] lg:h-[600px] p-6 overflow-hidden">
            <img
              src="/assets/Arrival1.svg"
              alt="PS5"
              className="w-full h-full object-contain lg:absolute lg:top-[90px] lg:left-6 lg:right-6 lg:max-w-[calc(100%-48px)]"
            />
            <div className="absolute bottom-6 left-6 right-6 lg:max-w-[242px] text-center lg:text-left">
              <h3 className="font-inter font-semibold text-2xl mb-4">Play Station 5</h3>
              <p className="text-sm font-poppins mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <button className="text-base font-poppins font-medium border-b-2 border-white pb-[2px]">
                Shop Now
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Top Right (Women) */}
            <div className="relative bg-black text-white h-[284px] lg:h-[284px] overflow-hidden">
              <img
                src="/assets/Arrival2.svg"
                alt="Women Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start lg:items-start px-5 text-center lg:text-left">
                <h3 className="font-inter font-semibold text-2xl mb-4">Women’s Collections</h3>
                <p className="text-sm font-poppins mb-4">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="text-base font-poppins font-medium border-b-2 border-white pb-[2px]">
                  Shop Now
                </button>
              </div>
            </div>

            {/* Bottom Two Boxes */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Speakers */}
              <div className="relative bg-black text-white h-[284px] flex-1 overflow-hidden">
                <img
                  src="/assets/Arrival3.svg"
                  alt="Speakers"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 bottom-6 max-w-[200px] text-left">
                  <h3 className="font-inter font-semibold text-2xl mb-2">Speakers</h3>
                  <p className="text-sm font-poppins mb-3">Amazon wireless speakers</p>
                  <button className="text-base font-poppins font-medium border-b-2 border-white pb-[2px]">
                    Shop Now
                  </button>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative bg-black text-white h-[284px] flex-1 overflow-hidden">
                <img
                  src="/assets/Arrival4.svg"
                  alt="Perfume"
                  className="w-full h-full object-cover"
                />
                <div className="absolute left-5 bottom-6 max-w-[200px] text-left">
                  <h3 className="font-inter font-semibold text-2xl mb-2">Perfume</h3>
                  <p className="text-sm font-poppins mb-3">GUCCI INTENSE OUD EDP</p>
                  <button className="text-base font-poppins font-medium border-b-2 border-white pb-[2px]">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
