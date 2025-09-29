

// src/pages/Home/sections/Services.tsx
export default function Services() {
  const services = [
    {
      icon: "/assets/delivery.svg",
      title: "FREE AND FAST DELIVERY",
      text: "Free delivery for all orders over $140",
    },
    {
      icon: "/assets/support.svg",
      title: "24/7 CUSTOMER SUPPORT",
      text: "Friendly 24/7 customer support",
    },
    {
      icon: "/assets/return.svg",
      title: "EASY RETURNS",
      text: "We return money within 30 days",
    },
  ];

  return (
    <section className="w-full bg-white font-poppins px-6 py-16">
      <div className="max-w-[1170px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-20 md:gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-3 flex-1"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-20 h-20 mb-5"
            />
            <h3 className="text-lg md:text-xl font-semibold leading-7">
              {service.title}
            </h3>
            <p className="text-sm md:text-base font-normal leading-6 text-gray-600">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
