import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";
import { ChevronsRight } from 'lucide-react';



const Blog = () => {
  const blogs = [
    { video: "/video/banner.mp4",
      title:"Immersive Industries Experience",
      image:"/robo.webp"

     },
    { video: "/video/banner.mp4",
      title:"Immersive Industries Experience",
      image:"/robo.webp"

     },
    { video: "/video/banner.mp4",
      title:"Immersive Industries Experience",
      image:"/robo.webp"

     },
    { video: "/video/banner.mp4",
      title:"Immersive Industries Experience",
      image:"/robo.webp"

     },
    { video: "/video/banner.mp4",
      title:"Immersive Industries Experience",
      image:"/robo.webp"

     },
  ];

  return (
    <section className="py-12 offercart">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F8A8B]">Blog</h1>
        <p className="text-center text-gray-600 mb-6 leading-0.5 " >
         showing Our Experties and Innovations
        </p>
      </div>

      <div className="w-full portfolio overflow-hidden">
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        //   navigation={true}
        //   pagination={{ clickable: true }}
          loop={true}
          modules={[Pagination,Autoplay]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
        >
          {blogs.map((card, index) => (
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
  const [isHovered,setIsHovered] = useState(false);
  return (
    <div className="relative w-[280px] h-[250px] rounded-xl overflow-hidden shadow-lg transition-all duration-300"
    onMouseEnter={()=> setIsHovered(true)}
    onMouseLeave={()=>setIsHovered(false)}
    >
      {/* Video Background */}
      {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={card.video} type="video/mp4" />
      </video> */}

      <img src={card.image} alt="ai-robo"className="w-full h-full object-cover" />

      <div
    className={`absolute bottom-0 left-0 transition-all cursor-pointer card-detail bg-gradient-to-t from-black via-black/60 to-transparent p-3 duration-500  ${
      isHovered ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"
    }`}
  >
    <p className="text-white text-xl mt-1">{card.title}</p>
  </div>
      {/* Button in the Bottom Right Corner */}
      <button className="absolute bottom-3 -rotate-45 right-4 bg-[#4F8A8B] portfolio-btn rounded-full text-white hover:bg-[#3b6f6f] transition-all duration-300">
      <span className="text-white text-lg">   <ChevronsRight /></span>
      </button>
    </div>
  );
};

export default Blog;
