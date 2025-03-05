import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const Clients = () => {
  const cards = [
    {
      image: "/banner.png", // Ensure this path is correct
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
    {
      image: "/banner.png",
    },
  ];

  return (
    <section className="py-12 client-list ">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F8A8B]">Our Clients</h1>
        <p className="text-gray-600 leading-0.5 ">Trusted by Businesses Worldwide</p>
      </div>

      <div className="max-w-full overflow-hidden">
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Fixed autoplay
          loop={true}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
          }}
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <SimpleCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const SimpleCard = ({ card }) => {
  return (
    <div className="w-[225px] h-[72px] client-list rounded-lg shadow-md bg-white text-center">
      <img src={card.image} alt="Client" className="w-full h-full" />
    </div>
  );
};

export default Clients;
