import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
import { ChevronsRight } from 'lucide-react';

const Portfolio = () => {
  const cards = [
    { 
      video: "/video/banner.mp4",
      image:"/robo.webp"
     },
    {
       video: "/video/banner.mp4",
       image:"/robo.webp"       
     },
    {
       video: "/video/banner.mp4" ,
       image:"/robo.webp"
    },
    {
       video: "/video/banner.mp4",
       image:"/robo.webp"
     },
    {
       video: "/video/banner.mp4",
       image:"/robo.webp"
     },
    {
       video: "/video/banner.mp4",
       image:"/robo.webp"         
    },
  ];

  return (
    <section className="py-12 offercart">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F8A8B]">Portfoliio</h1>
        <p className="text-center text-gray-600 mb-6 leading-0.5 " >
         showing Our Experties and Innovations
        </p>
      </div>

      <div className="w-full portfolio overflow-hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // navigation={true}
          // pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination,Autoplay]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
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
    <div className="relative w-[280px] h-[250px] rounded-xl overflow-hidden shadow-lg">
      {/* Video Background */}
      {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={card.video} type="video/mp4" />
      </video> */}
      
      <img src={card.image} alt="" className="w-full h-full object-cover" />

      {/* Button in the Bottom Right Corner */}
      <button className="absolute bottom-3 right-4 -rotate-45 bg-[#4F8A8B] portfolio-btn rounded-full text-white hover:bg-[#3b6f6f] transition-all duration-300">
      <span className="text-white text-lg "> <ChevronsRight /></span>
      </button>
    </div>
  );
};

export default Portfolio;
