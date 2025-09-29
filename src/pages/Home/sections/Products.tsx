


const Products = () => {
  const products = [
    {
      id: 1,
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      rating: "/assets/Five star.svg",
      reviews: 65,
      image: "/assets/Product1.svg",
    },
    {
      id: 2,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      rating: "/assets/Four Half Star.svg",
      reviews: 40,
      image: "/assets/Product2.svg",
    },
    {
      id: 3,
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      rating: "/assets/Five star.svg",
      reviews: 120,
      image: "/assets/Product3.svg",
    },
    {
      id: 4,
      name: "Small BookSelf",
      price: 360,
      oldPrice: 360,
      rating: "/assets/Four Half Star.svg",
      reviews: 70,
      image: "/assets/Product4.svg",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-[1170px] mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          <div className="flex flex-col items-start gap-3">
            <img src="/assets/productsSmall.svg" alt="small icon" className="w-28 md:w-32" />
            <h2 className="text-2xl md:text-4xl font-semibold font-inter text-black">
              Best Selling Products
            </h2>
          </div>
          <button className="bg-[#FF6767] hover:bg-red-600 text-white px-10 py-3 rounded text-sm font-medium font-poppins">
            View All
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-7">
          {products.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 font-poppins">
              {/* Image Box */}
              <div className="relative bg-gray-100 h-60 md:h-64 flex items-center justify-center rounded-md overflow-hidden group">
                <img src={item.image} alt={item.name} className="max-h-40 object-contain" />

                {/* Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img src="/assets/Fill Heart.svg" alt="wishlist" className="w-8 h-8 cursor-pointer" />
                  <img src="/assets/Fill Eye.svg" alt="view" className="w-8 h-8 cursor-pointer" />
                </div>

                {/* Add to Cart */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-black text-white flex items-center justify-center text-sm font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Add to Cart
                </div>
              </div>

              {/* Info */}
              <h3 className="text-sm font-medium">{item.name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-red-600 font-semibold">${item.price}</span>
                <span className="line-through text-gray-500">${item.oldPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={item.rating} alt="rating" className="w-20" />
                <span className="text-gray-500 text-sm">({item.reviews})</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
