import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination,Autoplay,Navigation } from "swiper/modules";

const Offer = () => {
  const cards = [
    {
      title: "Digital Twins",
      description: "Interactive 3D experiences with real-time insights.",
      image: "/robo.webp",
    },
    {
      title: "Immersive Industry Experiences",
      description: "Transform your industry with immersive technology.",
      image: "/robo.webp",
    },
    {
      title: "Training Modules",
      description: "Engaging learning experiences for professionals.",
      image: "/robo.webp",
    },
    {
      title: "Augmented Reality",
      description: "Enhancing reality with cutting-edge AR solutions.",
      image: "/robo.webp",
    },
    {
      title: "3D Animation Services",
      description: "Bringing ideas to life with 3D visualization.",
      image: "/robo.webp",
    },
  ];

  return (
    <section className="py-12 offercart">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F8A8B] leading-1.5">
          What We Offer
        </h1>
        <p className="text-gray-600 tail">
          Tailored Solutions to Drive Your Success
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="max-w-full overflow-hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          // navigation={true}
          modules={[Pagination,Autoplay,Navigation]}
          breakpoints={{
            // 4320: { slidesPerView: 5 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          className="mySwiper"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <HoverCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

const HoverCard = ({ card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[250px] h-[320px] card-view rounded-xl overflow-hidden shadow-lg transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Background */}
      <img src={card.image} alt="" className="w-full h-full object-cover" />
      {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={card.video} type="video/mp4" />
      </video> */}

      {/* Overlay with Title & Expanding Description */}
      <div className="absolute bottom-0 left-0 w-full card-detail bg-gradient-to-t from-black via-black/60 to-transparent p-3">
        <p className="text-white font-semibold text-lg">{card.title}</p>

        {/* Scroll Effect for Description */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isHovered ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-gray-300 card-body text-sm mt-1">{card.description}</p>

          {/* Button - Visible Only on Hover */}
          <button className="mt-2 bg-[#4F8A8B] text-white cursor-pointer offer-btn rounded-md text-sm hover:bg-[#3b6f6f] transition-all duration-300 ">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
